import React from 'react';
import './password.css';

import { FaLock } from "react-icons/fa";

const Password = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Password</h1>
                <div className='input-box'>
                    <input type="password" placeholder='New Password' required />
                    <FaLock className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password' required />
                    <FaLock  className='icon'/>
                </div>
                
                <button type='submit'>Submit</button>
                
            </form>

        </div>
    );
};
export default Password;