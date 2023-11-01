import React from 'react';
import './Header.css';
import Rick from '../../ricko.png';
import Morty from '../../mo.png';
import AOS from 'aos';

AOS.init();

function Header() {
    return (
        <header className="app-header" data-aos="fade-down">
            <img src={Rick} alt="rick" className="header-logo" />
            <h1 className="header-title">Rickypedia</h1>
            <img src={Morty} alt="morty" className="header-logo2" />
        </header>
    );
}

export default Header;
