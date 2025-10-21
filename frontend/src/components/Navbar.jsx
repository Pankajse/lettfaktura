import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const {language, setLanguage} = useLanguage();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <img
                    src="diamond.png"
                    alt="logo"
                    className="nav-logo"
                />
                {/* Close and open Icon */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {<Menu size={28} />}
                </div>

                {/* Navbar buttons*/}
                <div className='navbar-options'>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Our Customers</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div className="nav-lang-button">
                        <div className='nav-lang'
                            onClick={() => { setLangMenuOpen(!langMenuOpen) }}
                        >
                            <span>{language}</span>
                            <img src={`${language === "English" ? "gb.png" : "sweden.png"}`} alt="flag" className="flag" />
                        </div>
                        <div className={`lang-options ${langMenuOpen ? 'active' : ''}`}>
                            <div className='nav-lang'
                                onClick={() => {
                                    setLanguage("English")
                                    setLangMenuOpen(false)
                                }}
                            >
                                <span>English</span>
                                <img src="gb.png" alt="flag" className="flag" />
                            </div>
                            <div className='nav-lang'
                                onClick={() => {
                                    setLanguage("Svenska")
                                    setLangMenuOpen(false)
                                }}
                            >
                                <span>Svenska</span>
                                <img src="sweden.png" alt="flag" className="flag" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;