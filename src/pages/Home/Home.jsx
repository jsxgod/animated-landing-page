import React, { useEffect, useState } from 'react'
import gsap from 'gsap';

import { Banner, Overlay, Products } from '../../components'

// animation timeline
const tl = gsap.timeline();

const overlayAnimation = (onCompleteFunction) => {
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
        stagger: 0.2
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
        },
        onComplete: onCompleteFunction
    })
}

const Home = () => {
    const [renderOverlay, setRenderOverlay] = useState(true);

    const removeOverlay = () => {
        setRenderOverlay(false);
    }
    
    useEffect(() => {
        overlayAnimation(removeOverlay)
    }, []);

    return (
        <>
            { renderOverlay ? <Overlay /> : ""}
            <Banner />
            <Products />
        </>
    )
}

export default Home
