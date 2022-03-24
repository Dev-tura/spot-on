import React from 'react';
import logo from "../Images/logo.svg"
import "../Header/Header.css"
import { GoThreeBars } from "react-icons/go"




const Header = () => {
    return (
        <div className='General'>
            <div className='space'>
                <div className='logodiv'>
                    <img src={logo} alt='' />
                </div>
                <div className='navs'>
                    <a href='a'>Home</a>
                    <a href='a'>About</a>
                    <a href='a'>Contact</a>
                    <a href='a'>Blog</a>
                    <a href='a'>Careers</a>
                </div>
                <button className='b1'>Request Invite</button>
                <GoThreeBars className='bar' />
            </div>
        </div>
    )
}


export default Header