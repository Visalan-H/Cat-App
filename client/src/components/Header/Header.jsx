import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [dark, setDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    let a = document.body;

    const toggleMenu = () => {
        a.style.overflow = (!menuOpen ? 'hidden' : 'auto');
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
                <h3><a title='not developed yet' href='/'>My Cats</a></h3>
                <h3><a href='/cats/create'>create</a></h3>
                <h3><a title='not developed yet' href='/'>Delete</a></h3>
                <h3><a title='not developed yet' href='/'>Edit</a></h3>
            </div>
            <div className='righthehe'>
                <button className="toggledark" style={{ color: 'black' }} onClick={toggleColor}>
                    <i className={`fa fa-${dark ? 'moon' : 'sun'}`} title='This feature hasnt been fully developed yet.'></i>
                </button>

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
            </div>
        </div>
    );
}

export default Header;
