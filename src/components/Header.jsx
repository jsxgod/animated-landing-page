import React from 'react'
import HamburgerMenu from './util/HamburgerMenu'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <a href="/">COMPANY</a>
                    </div>
                    <HamburgerMenu />
                </div>
            </div>
            
        </div>
    )
}

export default Header
