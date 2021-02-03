import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as UpArrow } from '../../assets/arrow-up-circle.svg';

const HamburgerMenu = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        menuOpened ? 
            // run open menu animation
            console.log('open')
        :
            // run close menu animation
            console.log('close')

    }, [menuOpened]);

    return (
        <div className="nav-toggle">
            <div onClick={() => setMenuOpened(true)} className="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div onClick={() => setMenuOpened(false)} className="hamburger-menu-close">
                <UpArrow />
            </div>
        </div>
    )
}

export default HamburgerMenu
