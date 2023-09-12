import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/mauric10" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="mailto:mauricio.gon234@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon />
                </a>
                <a href="https://github.com/mauriciog88u1" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
            </div>
        </div>
    );
}

export default Footer;
