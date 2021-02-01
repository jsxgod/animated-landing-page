import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Route } from 'react-router-dom';
import { Header } from './components/';
import { About, Approach, Home, Product, Services } from './pages';

import './styles/App.scss';

const exact_routes = [
    { path: "/", name: "Home", Component: Home},
    { path: "/about-us", name: "About Us", Component: About},
    { path: "/approach", name: "Approach", Component: Approach},
    { path: "/services", name: "Services", Component: Services},
];

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
        </>
    )
}

export default App
