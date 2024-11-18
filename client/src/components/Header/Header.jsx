import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [dark, setDark] = useState(true);


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
                <h2 className='light'>LOGO</h2>
            </div>
            <button className="toggledark" style={{ color: 'black' }} onClick={toggleColor}>Switch Theme</button>

        </div>
    );
}

export default Header;
