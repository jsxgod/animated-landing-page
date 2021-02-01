import React, { useEffect } from 'react'
import gsap from 'gsap';
import { Banner, Header, Overlay, Products } from './components/';

import './styles/App.scss';

const App = () => {

    useEffect(() => {
        let vh = window.innerHeight * .01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        gsap.to('body', {
            duration: 0,
            css: {visibility: "visible"}
        });

        const tl = gsap.timeline();
        tl.from(".line div", {
            duration: 1.8,
            y: 200,
            ease: "power4.out",
            skewY: 7,
            delay: 1,
            stagger: {
                amount: 0.3
            }
        })
        .to('.box-top', {
            duration: 1.6,
            height: 0,
            ease: 'expo.inOut',
            stagger: 0.4
        })
        .to('.box-bottom', {
            duration: 1.6,
            width: 0,
            ease: 'expo.inOut',
            delay: -0.8,
            stagger: {
                amount: 0.4
            }
        })
        .to('.overlay', {
            duration: 0,
            css: { 
                display: "none" 
            }
        })
        .from('.product-image img', {
            duration: 1.6,
            scale: 1.4,
            ease: "expo.inOut",
            delay: -2,
            stagger: {
                amount: 0.4
            }
        })
    }, []);

    return (
        <div className="App">
            <Overlay />
            <Header />
            <Banner />
            <Products />
        </div>
    )
}

export default App
