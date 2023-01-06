import './Facts.css'
import logo from '../logo.svg';

let Fact =()=>{
    return(
        <div className="project">
        <div className="navbar">
        <div className="navimg">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> React Facts</h3>
        </div>
        <h5> React Course - Project 1</h5>
        </div>
        <div className="home">
        <h1>Fun Facts about React</h1>
        <ul className="facts">
        <li>Was first Realesed in 2013 </li>
        <li>Was originally createdd by Jordan Walke </li>
        <li>Has well over 100K stars on Github </li>
        <li>Is maintained by Facebook </li>
        <li>Powers thousads of enterprise apps, including mobile apps </li>

        </ul>
        </div>

        </div>
    );
}

export default Fact;