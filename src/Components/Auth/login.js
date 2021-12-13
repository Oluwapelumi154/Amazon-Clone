import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
function Login() {
    return (
        <div className='login'>
            <Link to='/login'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                    className='login_logo'
                />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>
                <form>
                    <div className='mb-3'>
                        <label className='form-label'>username:</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>password:</label>
                        <input type='password' className='form-control' />
                    </div>
                    <div className='d-grid'>
                        <button className='btn loginSignIn_Button'>
                            sign In
                        </button>
                    </div>
                    <p>
                        By signing-in you agree to the AMAZON FAKE CLONE
                        Conditions of Use & Sale. Please see our Privacy Notice,
                        our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className='btn loginRegister_Button'>
                        create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
