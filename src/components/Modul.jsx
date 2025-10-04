// imports
import "./css/modal.css"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function Modal({ modaln, setuser, modalactive }) {
    let [name, setName] = useState("")
    const cars = {
        name: name,
        id: uuidv4()
    }
    function getname(e) {
        e.preventDefault()
        if (name.trim()) {
            const newCar = {
                name: name,
                id: uuidv4()
            }
            setuser(prev => [...prev, newCar])
            setName("")
            modaln(false)
            modalactive(false)
        }
    }

    if (modaln === true) {
        document.body.classList.add("active")
    } else {
        document.body.classList.remove("active")
    }

    return (
        <div className="modal" onClick={() => { modaln(false); modalactive(false) }}>
            <form onSubmit={getname} onClick={(e) => e.stopPropagation()}>
                <input
                    placeholder="Car name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
                <button type="submit">Add</button>
                <button type="button" onClick={() => { modaln(false); modalactive(false) }}>X</button>
            </form>
        </div>
    )
}