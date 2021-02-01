import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Route } from 'react-router-dom';
import { Header, Navigation } from './components/';
import { About, Approach, Home, Product, Products, Services } from './pages';

import './styles/App.scss';

const exact_routes = [
    { path: "/", name: "Home", Component: Home},
    { path: "/about-us", name: "About Us", Component: About},
    { path: "/approach", name: "Approach", Component: Approach},
    { path: "/services", name: "Services", Component: Services},
    { path: "/products", name: "Products", Component: Products}
];

const contactRoutes = [
    { 
        name: "Email", 
        links: [
            {path: '/contact', description: 'Get in touch with us'},
            {path: '/audit', description: 'Get a free audit'},
        ],
        navLink: true
    },
    {
        name: "Headquarters",
        links: [
            'Street',
            'ZIP City',
            'Country',
        ],
        navLink: false,
    },
    {
        name: "Phone",
        links: [
            '+12 (0) 34 567 ',
        ],
        navLink: false,
    },
    {
        name: "Legal",
        links: [
            'Privacy and Cookies',
        ],
        navLink: false,
    },
]

const App = () => {

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        gsap.to("body", {
            duration: 0,
            css: { visibility: "visible"}
        });
    }, [])

    return (
        <>
            <Header />
            <div className="App">
                {exact_routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        <Component />
                    </Route>
                ))}

                <Route path="/product" component={ Product } />
            </div>
            <Navigation menuRoutes={exact_routes} contactRoutes={contactRoutes} />
        </>
    )
}

export default App
