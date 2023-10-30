import './Header.css'
import Rick from "../../rickk.png" 
import React from 'react';

  
const Header = () => {
    return (
        <header>
        <div classname="site-header">
            <div className="logo">
                    <img src={Rick} alt='rickImage'></img>
            </div>
            <div className='site-name'>
                rickypedia
            </div>
        </div>    
        </header>
    );
}

export default Header;
