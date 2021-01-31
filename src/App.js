import React, { useEffect } from 'react'
import { Banner, Header, Products } from './components/';

import './styles/App.scss';

const App = () => {

    useEffect(() => {
        let vh = window.innerHeight * .01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return (
        <div className="App">
            <Header />
            <Banner />
            <Products />
        </div>
    )
}

export default App
