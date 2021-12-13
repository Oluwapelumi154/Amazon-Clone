import React from "react";
import "./CheckOut.css";
import SubTotal from "./SubTotal";
import { useSelector } from "react-redux";
import CheckOutProduct from "./checkOutProduct";
function CheckOut() {
    const state = useSelector((state) => state.cartItems);
    const { cartItems } = state;

    return (
        <div className='checkOut'>
            <div className='checkOut_left'>
                <img
                    className='checkOut_add'
                    alt=''
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                />
                <div>
                    <h5 className='checkOut_title'>Your shopping Cart</h5>
                    {cartItems.map((item) => (
                        <CheckOutProduct
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>

            <div className='checkOut_right'>
                <SubTotal />
            </div>
        </div>
    );
}

export default CheckOut;
