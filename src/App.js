import React, { useEffect } from 'react'
import gsap from 'gsap';
import { Header } from './components/';
import { Home } from './pages';

import './styles/App.scss';

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
            <Home />
        </>
    )
}

export default App
