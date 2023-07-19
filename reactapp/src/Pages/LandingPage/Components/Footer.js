import React from "react";
import {BsFacebook} from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "../Styles/Footer.css";
function Footer(){
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>Links</h4>
                    <hr></hr>
                    <br></br>
                    <a href="/SignUpPage">
                        <p>Register </p>
                    </a>
                    <a href="/login">
                        <p>Login</p>
                    </a>
                    
                    </div>
                 
                    <div className="sb__footer-links_div">
                        <h4> Our Company</h4>
                        <hr></hr>
                        <br></br>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="/service">
                            <p>Service</p>
                        </a>
                       
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Social Network</h4>
                        <hr></hr>
                       <br></br>
                        <div className="socialmedia">
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><BsFacebook/></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><BsTwitter/></a>
                            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><BsInstagram/></a>
                            <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><BsLinkedin/></a>
                        </div>
                    </div>
            </div>
            <hr></hr>
            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn.All right reserved.
                    </p>
                </div>
              
            </div>
        </div>
</div>
    );
}

export default Footer;
