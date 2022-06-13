import React from "react";

import logo from '../styling/hacker-news-logo.svg'
import '../styling/Header.css'
import '../styling/index.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-left'>
                <div className='header-logo'>
                    <img src={logo} alt='Y combinator logo'/>
                </div>
                <div className='header-title'>
                    <h2>Hacker News</h2>
                </div>
                <div className='header-toggle'>
                    <p>latest | starred</p>
                </div>
            </div>
            <div className='header-right'>
                <div className='darkmode'>
                    Dark Mode
                </div>
            </div>
        </div>
    )
}

export default Header;