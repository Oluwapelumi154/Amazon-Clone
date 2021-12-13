import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import "./SubTotal.css";
function SubTotal() {
    const state = useSelector((state) => state.cartItems);
    const { cartItems } = state;
    const subTotal = (cartItems) => {
        const val = cartItems?.reduce((acc, v) => acc + v.price, 0);
        return val;
    };
    return (
        <div className='subTotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({cartItems?.length} items) :
                            <strong>{value}</strong>
                            <small className='subTotal_gift'>
                                <input type='checkbox' />
                                This Order contains a gift
                            </small>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={subTotal(cartItems)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"#"}></CurrencyFormat>
            <button className='btn'>proceed to checkOut</button>
        </div>
    );
}
export default SubTotal;
