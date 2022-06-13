import React from "react";
import "../styling/Footer.css"

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='footer-header'>
                <h2>Hacker News</h2>
            </div>
            <div className='footer-toggle'>
                latest | starred
            </div>
        </div>
    )
}

export default Footer;