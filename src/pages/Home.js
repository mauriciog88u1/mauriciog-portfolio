import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import useTypingEffect from "../hooks/useHome"; // Importing the custom hook
import "../styles/Home.css";

function Home() {
    const titleText = useTypingEffect("Hi, My Name is Mauricio", 100);

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
                <ol className="list">
                    <li className="item">
                        <h2>Programming Languages</h2>
                        <span>C, C#, C++, Java, JavaScript, PHP, PowerShell, Python, HTML, CSS</span>
                    </li>
                    <li className="item">
                        <h2>Operating Systems</h2>
                        <span>Linux (Alma, Kali, Ubuntu), macOS, Windows</span>
                    </li>
                    <li className="item">
                        <h2>Development Skills</h2>
                        <span>Agile development, data structures, algorithms, databases, Git, Scrum, networking, cybersecurity</span>
                    </li>
                    <li className="item">
                        <h2>Frameworks & Tools</h2>
                        <span>NPM, Node.js, ReactJS, Webpack</span>
                    </li>
                    <li className="item">
                        <h2>Professional Skills</h2>
                        <span>Leadership, collaboration through previous work experiences</span>
                    </li>
                    <li className="item">
                        <h2>Testing Proficiency</h2>
                        <span>Test-Driven Development with tools such as GitHub Actions, Jest, JUnit, and Postman</span>
                    </li>
                    <li className="item">
                        <h2>Language Proficiency</h2>
                        <span>Fluent in Spanish with the ability to work well across all cultures and identities</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
