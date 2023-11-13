import React from 'react';
import MyPhoto from '../../src/static/images/mauricio-githubphoto.jpg';
import MyResume from '../../src/static/resume/Mauricio_Gonzalez\'s_resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutMe() {
    return (
        <div className="container" style={{ marginTop: '100px', color: 'white' }}>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={MyPhoto} alt="Mauricio Gonzalez" className="img-thumbnail" style={{ maxWidth: '200px' }} />
                </div>
                <div className="col-md-6">
                    <h1>About Me</h1>
                    <p>Hello, I'm Mauricio Gonzalez, a first-generation Hispanic Computer Science Student. My journey began at Groundwork Denver at 14, where I was deeply involved in environmental projects. I've worked in tech at Target, served as a Python teaching assistant, and now work as an IT lab tech. My internship at Cisco Meraki as a Network Engineer was a significant step in my career. I am also a mentor for first-generation computer science students, becoming the guide I once needed.</p>
                    <a href={MyResume} download="Mauricio_Gonzalez_Resume.pdf" className="btn btn-primary">Download Resume</a>
                </div>
            </div>
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col">
                    <h2>My Interests</h2>
                    <p>Outside of work, my passion for chess, kindled during summers at Groundwork Denver, thrives. It's a game that challenges my strategic thinking and keeps me mentally sharp. Working with nonprofits like Groundwork Denver has instilled a deep sense of gratitude and community focus in me. I've grown to love community-centered work, finding immense satisfaction in contributing to meaningful causes. My high school wrestling experience taught me the importance of urgency, hard work, and commitment. These sports experiences have not only been a source of enjoyment but have also significantly shaped my personal values and work ethic.</p>
                </div>
            </div>
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col">
                    <h2>Summary</h2>
                    <p> I am deeply passionate about solving problems through technology. My belief that coding empowers one to craft virtually any solution fuels my love for this field. This enthusiasm for technological innovation drives me to continuously explore and create impactful solutions in the tech world."</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
