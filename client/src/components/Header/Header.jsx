import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [dark, setDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleColor = () => {
        let prev = dark ? 'light' : 'dark';
        let curr = dark ? 'dark' : 'light';

        Array.from(document.getElementsByClassName(prev)).forEach(element => {
            element.classList.add(curr);
            element.classList.remove(prev);

        });
        setDark(!dark);
    }

    return (
        <div className="header_main light">
            <div className="logo">
                <h2 className='light'>Vizzkers</h2>
            </div>
            <div className="nav_links">
                <h3><a href='/'>Home</a></h3>
                <h3><a href='/cats/create'>create</a></h3>
                {/* <h3><a href='/cats/mycats'>Services</a></h3>
                <h3><a href='/cats/mycats/deletecat'>Blog</a></h3>
                <h3><a href='/cats/mycats/editcat'>Contact</a></h3> */}
            </div>
            <div className='righthehe'>
                <button className="toggledark" style={{ color: 'black' }} onClick={toggleColor}><i className={`fa fa-${dark?'moon':'sun'}`}></i></button>
                <div className="ham_menu" onClick={toggleMenu}>
                    <i className="fa fa-align-right"></i>
                </div>
            </div>
            <div className={`menu_items ${menuOpen ? 'show' : ''} padded`}>
                <a href='/' onClick={toggleMenu}>
                    <h3>Home</h3>
                </a>
                <a href='/cats/create' onClick={toggleMenu}>
                    <h3>Create</h3>
                </a>
                <a href='#services' onClick={toggleMenu}>
                    <h3>Services</h3>
                </a>
                <a href='#portfolio' onClick={toggleMenu}>
                    <h3>Portfolio</h3>
                </a>
                <a href='#pricing' onClick={toggleMenu}>
                    <h3>Pricing</h3>
                </a>
                <a href='#blogs' onClick={toggleMenu}>
                    <h3>Blog</h3>
                </a>
                <a href='#contact' onClick={toggleMenu}>
                    <h3>Contact</h3>
                </a>
            </div>
        </div>
    );
}

export default Header;
