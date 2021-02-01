import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ menuRoutes, contactRoutes }) => {
    return (
        <nav>
            <div className="container">
                <div className="nav-container">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            {menuRoutes.map(({ path, name }) => (
                            <li>
                                <NavLink to={path} exact>
                                    {name}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            {contactRoutes.map((route) => (
                                <ul className="nav-info">
                                    <li className="nav-info-label">{route.name}</li>
                                    {route.navLink ? 
                                        route.links.map((link) => (
                                            <li>
                                                <NavLink to={link.path} exact>
                                                    {link.description}
                                                </NavLink>
                                            </li>
                                        ))
                                    :
                                        route.links.map((description) => (
                                            <li>{ description }</li>
                                        ))
                                    }
                                </ul>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navigation
