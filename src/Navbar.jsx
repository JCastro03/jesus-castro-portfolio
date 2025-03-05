import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
        <div className="container">
            <a className="navbar-brand" href="">ITP 303</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                        {/* <NavLink className="nav-link" to="/experience">Experience</NavLink> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                        {/* <NavLink className="nav-link" to="/projects">Projects</NavLink> */}
                    </li>
                    <li>
                        <a className="nav-link" href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
}