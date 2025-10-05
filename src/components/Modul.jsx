// imports
import "./css/modal.css"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Modal({ modaln, setuser, modalactive }) {
    let [name, setName] = useState("")

    function getformdata(form) {
        const formdata = new FormData(form)
        const carobj = {}
        for (let [key, value] of formdata.entries()) {
            carobj[key] = value
        }

        setuser(prev => [...prev, { ...carobj, id: uuidv4() }])
        setName("")
        modaln(false)
        modalactive(false)
        console.log(carobj)
    }

    return (
        <div className="modal" onClick={() => { modaln(false); modalactive(false) }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    getformdata(e.target)
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    placeholder="Car name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                />
                <button type="submit">Add</button>
                <button type="button" onClick={() => { modaln(false); modalactive(false) }}>X</button>
            </form>
        </div>
    )
}
