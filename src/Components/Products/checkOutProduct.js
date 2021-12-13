import React from "react";
import "./checkOutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { Remove_cartItem } from "../../Redux/store/slices/cartSlices";
import { useDispatch } from "react-redux";
function CheckOutProduct({ id, image, price, title, rating }) {
    const dispatch = useDispatch();
    const removeCartItem = (id) => {
        dispatch(Remove_cartItem(id));
    };
    return (
        <div className='checkOut_product'>
            <img src={image} alt='' className='checkOut_product_image' />
            <div className='checkOut_product_description'>
                <p className='checkOut_product_title'>{title}</p>
                <p className='checkOut_product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkOut_product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                className='checkOut_product_rating'
                            />
                        ))}
                </div>
                <button className='btn' onClick={() => removeCartItem(id)}>
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default CheckOutProduct;
