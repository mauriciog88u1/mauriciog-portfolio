import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { useTypingEffect, useScrollFadeIn } from "../hooks/useHome";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiPhp } from "react-icons/si";

function Home() {
    const titleText = useTypingEffect("Hi, My Name is Mauricio", 100);
    const programmingLanguagesFadeIn = useScrollFadeIn();
    const operatingSystemsFadeIn = useScrollFadeIn();
    const developmentSkillsFadeIn = useScrollFadeIn();
    const frameworksToolsFadeIn = useScrollFadeIn();
    const professionalSkillsFadeIn = useScrollFadeIn();
    const testingProficiencyFadeIn = useScrollFadeIn();
    const languageProficiencyFadeIn = useScrollFadeIn();

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
                <div className="card  mb-3" {...programmingLanguagesFadeIn}>
                    <div className="card-header">Programming Languages</div>
                    <div className="card-body">
                        <FaPython title="Python" />
                        <FaJava title="Java" />
                        <SiCplusplus title="C++" />
                        <SiCsharp title="C#" />
                        <FaHtml5 title="HTML" />
                        <FaCss3Alt title="CSS" />
                        <FaJsSquare title="JavaScript" />
                        <FaReact title="React" />
                        <SiPhp title="PHP" />
                    </div>
                </div>
                <div className="card  mb-3" {...operatingSystemsFadeIn}>
                    <div className="card-header">Operating Systems</div>
                    <div className="card-body">
                        Linux (Alma, Kali, Ubuntu), macOS, Windows
                    </div>
                </div>
                <div className="card  mb-3" {...developmentSkillsFadeIn}>
                    <div className="card-header">Development Skills</div>
                    <div className="card-body">
                        Agile development, data structures, algorithms, databases, Git, Scrum, networking, cybersecurity
                    </div>
                </div>
                <div className="card  mb-3" {...frameworksToolsFadeIn}>
                    <div className="card-header">Frameworks & Tools</div>
                    <div className="card-body">
                        NPM, Node.js, ReactJS, Webpack
                    </div>
                </div>
                <div className="card  mb-3" {...professionalSkillsFadeIn}>
                    <div className="card-header">Professional Skills</div>
                    <div className="card-body">
                        Leadership, collaboration through previous work experiences
                    </div>
                </div>
                <div className="card  mb-3" {...testingProficiencyFadeIn}>
                    <div className="card-header">Testing Proficiency</div>
                    <div className="card-body">
                        Test-Driven Development with tools such as GitHub Actions, Jest, JUnit, and Postman
                    </div>
                </div>
                <div className="card  mb-3" {...languageProficiencyFadeIn}>
                    <div className="card-header">Language Proficiency</div>
                    <div className="card-body">
                        Fluent in Spanish with the ability to work well across all cultures and identities
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
