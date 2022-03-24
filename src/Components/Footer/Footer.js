import React from "react";
import logo from "../Images/logo.svg"
import facebook from "../Images/facebook.png"
import youtube from "../Images/youtube.png"
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import "../Footer/Footer.css"



const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footerpace">
                <div className="div1">
                    <div className="logoo">
                        <div className="image">
                        <img src={logo} alt= '' />
                        </div>
                        <div className="icon">
                           <img src={facebook} alt='face' />
                           <img src={youtube} alt='face' />
                           <img src={twitter} alt='face' />
                           <img src={instagram} alt='face' />
                        </div>
                    </div>
                    <div className="navss">
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>Blog</p>
                    </div>
                    <div className="navvs">
                        <p>Careers</p>
                        <p>Support</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className="div2">
                    <button>Request Invite</button>
                    <p>@Easybank. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}


export default Footer