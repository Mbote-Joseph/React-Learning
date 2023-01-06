import logo from '../logo.svg';
import './Navbar.css'
let Navbar = ({name}) =>{
    return (
        <div className="nav">
        <div className="title">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> Welcome, {name} ! </h3>
        </div>


        <ul>
        <a href="/test">Home</a>
        <a href="/test">About</a>
        <a href="/test">Contact</a>

        </ul>
        
      </div>
    );
}

export default Navbar;