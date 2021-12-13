import React from "react";
import "./product.css";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { Add_cartItem } from "../../Redux/store/slices/cartSlices";
function Product({ id, title, image, price, rating }) {
    const dispatch = useDispatch();

    const AddToCart = () => {
        dispatch(
            Add_cartItem({
                id,
                title,
                image,
                price,
                rating,
            })
        );
    };
    return (
        <div className='product'>
            <div className='product_Description'>
                <p>{title}</p>
                <p className='product_Price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_Rating mb-5'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className='rating_Icons' />
                        ))}
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={AddToCart} className='btn btn-sm'>
                Add item to Cart
            </button>
        </div>
    );
}

export default Product;
