import React from "react";
import {NavLink} from "react-router-dom"
//React fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Menu(){
    return(
        
        <nav className="navbar navbar-expand-md header">
            <div className="container">
               <NavLink to={`/`} className="navbar-brand text-white">Portfolio</NavLink> 
               <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
               <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
               </button>
                <div className="collapse navbar-collapse justify-content-end" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/`} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/about`} className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/education`} className="nav-link">Education</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/skills`} className="nav-link">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/projects`} className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}

export default Menu