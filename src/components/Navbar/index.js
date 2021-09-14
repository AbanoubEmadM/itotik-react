import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './_style.scss';
import Logo from './logo.svg'
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='#'>
                <img src={Logo} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#faq">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Pages</a>
                    </li>
                    <li className="nav-item">
                    <button>Download</button>

                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;