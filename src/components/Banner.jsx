import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';

const Banner = () => {
    return (
        <section className='main'>
            <div className='container'>
                <div className='row'>
                    <h2>
                        <div className='line'>
                            <div>Welcome message line 1</div>
                        </div>
                        <div className='line'>
                            <div>welcome message line 2.</div>
                        </div>
                    </h2>
                    <div className='btn-row'>
                        <a href="/">
                            More about us <RightArrow />
                        </a>
                    </div>
                </div>
            </div>          
        </section>
    )
}

export default Banner
