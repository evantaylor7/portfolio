import React from 'react'
import logo from './icon/logo.png'
import {Link} from 'react-scroll'
import resumePDF from "./resume.pdf"

function Nav(){
    return(
        <div className={"navbar-container"}>
            <Link to='page1' smooth={true}>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo'/>
                </div>
            </Link>
            <ul className="navbar">
                <Link className="nav-link home-link" to='page1' smooth={true}>Home</Link>
                <Link className="nav-link" to='page2' smooth={true}>Skills</Link>
                <Link className="nav-link" to='page3' smooth={true}>Projects</Link>
                <Link className="nav-link" to='footer' smooth={true}>Contact</Link>
                <a 
                    className="nav-link" 
                    href={resumePDF} 
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </ul>
        </div>
    )
}

export default Nav