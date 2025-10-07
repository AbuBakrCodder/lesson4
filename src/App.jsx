// import
import './App.css';
import Navbar from "./components/navbar.jsx"
import { useState } from 'react';
import Users from './components/users.jsx';
import Modal from './components/Modul.jsx';

function App() {
  let [users, setUser] = useState(
    [

    ]
  )
  let [modalus, setModal] = useState(false)
  let [active, setActive] = useState(false)

  let h2 = document.querySelector("h2")

  function deletebtn(id) {
    const filter = users.filter(user => {
      console.log(user);
      return user.id !== id
    })
    setUser(filter)
  }

  let modalactive = document.querySelector(".modalactive")
  function check(active) {
    setActive(prev => !prev)
  }

  return (
    <div className='App' onClick={() => { setModal(false) }}>
      <div className={`modalactive ${active ? "" : "hidden"}`}></div>
      <Navbar modalactive={check} modaln={setModal} />
      <h2 className='hidden'>No cars</h2>
      <div className='carswrapper'>
        <Users users={users} deletebtn={deletebtn} />
      </div>
      {modalus && <Modal modaln={setModal} setuser={setUser} modalactive={check} />}
      {users.length === 0 && (<h2>No cars</h2>)}
    </div>
  )
}
export default App;