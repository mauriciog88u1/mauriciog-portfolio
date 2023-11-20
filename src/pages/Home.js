// Home.js

import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { useTypingEffect} from "../hooks/useHome";

import Skills from "./Skills";

function Home() {
    const isMobile = window.innerWidth <= 500;
    const speed = isMobile ? 100 : 75;

    const titleText = useTypingEffect("Hi, My Name is Mauricio", speed);

    return (
        <div className="home">
            <div className="about">
                <div className="headerIntro">
                    <h2>{titleText.trim()}</h2>
                </div>
                <div className="prompt">
                    <br/>
                    <p>I am a Computer Science major at Colorado State University</p>
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
            <div className="skills">
                <h1>Skills</h1>
                <div className="card mb-3">
                    <div className="card-header">Programming Languages</div>
                    <div className="card-body">
                        <div className="skills">
                            <Skills/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
