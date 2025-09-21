import './App.css';
import { use, useState } from 'react';

function App() {
  let [users, setUser] = useState(
    [
      {
        name: "Bmw",
        id: 1
      },
      {
        name: "Mercedes-Benz",
        id: 2
      },
      {
        name: "Audi",
        id: 3
      },
      {
        name: "Porsche",
        id: 4
      }
    ]
  )

  let h2 = document.querySelector("h2")

  function deletebtn(id) {
    const filter = users.filter(user => {
      return user.id !== id
    })

    if (filter.length === 0) {     
      setUser(filter)
      h2.classList.toggle("hidden")
    }
    else {
      setUser(filter)
    }
  }

  return (
    <div className='App'>
      <h1>
        German cars
      </h1>
      <h2 className='hidden'>No cars</h2>
      {
        users.map((user) => {
          return (
            <div key={user.id} className='cars'>
              <h1>
                {user.name}
              </h1>
                <button onClick={() => { deletebtn(user.id) }}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;