// import
import "./css/navbar.css"

function Navbar({modaln, modalactive}){

    return(
        <nav onClick={(e)=>{e.stopPropagation()}}>
            <h1>
                Navbar
            </h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><button onClick={()=>{modaln(true); modalactive(true)}}>Add new car</button></li>
            </ul>
        </nav>
    )
}

export default Navbar