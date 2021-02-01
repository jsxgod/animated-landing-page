import React from 'react'

import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';

import curologyImg from '../assets/curology-min.png';
import yourspaceImg from '../assets/yourspace-min.png';
import luminImg from '../assets/lumin-min.png';

const products = [
    {
        id: 1, 
        title: 'Curology', 
        description: "A custom formula for your skin's unique needs",
        img: curologyImg,
    },
    {
        id: 2, 
        title: 'Yourspace', 
        description: "Open space floor plans for your next venture",
        img: yourspaceImg,
    },
    {
        id: 3, 
        title: 'Lumin', 
        description: "For your best look ever",
        img: luminImg,
    }
];

const Products = () => {
    return (
        <section className="products">
            <div className="container-fluid">
                <div className="products-nav">
                    <button disabled={true} className="products-arrow prev disabled">
                        <LeftArrow />
                    </button>
                    <button className="products-arrow next">
                        <RightArrow />
                    </button>
                </div>
                <div className="row">
                        {products.map((productItem) => (
                            <div className="product" key={productItem.id}>
                                <div className="product-details">
                                    <span>{productItem.title}</span>
                                    <h2>{productItem.description}</h2>
                                </div>
                                <div className="product-image">
                                    <img src={productItem.img} alt={productItem.description} />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            
        </section>
    )
}

export default Products
