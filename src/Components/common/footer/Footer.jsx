import React from "react";
import './Footer.css';
import facebook from './assets/facebook_icon.png';
import instagram from './assets/instagram_logo.png';
import tiktok from './assets/tiktok_logo.png';
import twitter from './assets/twitter_logo.png';

function Footer() {
    return (

        <footer className="foot">

            <ul className="socialmedia-container">
                <li><img className="logo" src={facebook} href="#"></img></li>
                <li><img className="logo" src={instagram} href="#"></img></li>
                <li><img className="logo" src={tiktok} href="#"></img></li>
                <li><img className="logo" src={twitter} href="#"></img></li>
            </ul>
            <p className="text-copy">Copyright © 2023 msflowercrochet.com. All Rights Reserved.</p>

        </footer>



    )
}

export default Footer;