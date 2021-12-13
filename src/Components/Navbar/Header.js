import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
    const state = useSelector((state) => state.cartItems);
    const { cartItems } = state;
    return (
        <div className='app_header'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt=''
                />
            </Link>
            <div className='header_search'>
                <input className='header_SearchInput' type='search' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <div className='header_link'>
                    <span className='header_item1'>Hello Guest</span>
                    <span className='header_item2'>Sign In</span>
                </div>
                <div className='header_link'>
                    <span className='header_item1'>Returns</span>
                    <span className='header_item2'>&Orders</span>
                </div>
                <div className='header_link'>
                    <span className='header_item1'>Your</span>
                    <span className='header_item2'>Prime</span>
                </div>
                <Link to='/checkOut'>
                    <div className='shopping_cartItem'>
                        <ShoppingCartIcon className='' />
                        <span className='header_item2 header_shoppingCart'>
                            {cartItems?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Header;
