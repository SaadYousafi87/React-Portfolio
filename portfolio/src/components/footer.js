import React from "react";
import gitHubLogo from "../assets/githublogo.png";
import linkedInLogo from "../assets/linkedinlogo.png";
import facebookLogo from "../assets/facebooklogo.png";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <section id="footer-icons">
            <Link to="https://github.com/saadyousafi87" href="true">
                <img className="footer-icon" src={gitHubLogo} alt="github-logo" width="40px" height="40px" />
            </Link>
            <Link to="https://github.com/saadyousafi87" href="true">
                <img className="footer-icon" src={linkedInLogo} alt="linkedin-logo" width="40px" height="40px" />
            </Link>
            <Link to="https://github.com/saadyousafi87" href="true">
                <img className="footer-icon" src={facebookLogo} alt="facebook-logo" width="40px" height="40px" />
            </Link>
        </section>
    );
}

export default Footer;