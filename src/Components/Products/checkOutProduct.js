import React from "react";
import "./checkOutProduct.css";
function checkOutProduct({ image, price, id, title, rating }) {
    return (
        <div className='checkOut_product'>
            <img src={image} alt='' />
            <div className='checkOut_product_description'>
                <p className='checkOut_product_title'>{title}</p>
                <p className='checkOut_product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
        </div>
    );
}

export default checkOutProduct;
