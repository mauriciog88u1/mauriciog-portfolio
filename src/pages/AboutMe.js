import React from 'react';
import MyPhoto from '../../src/static/images/mauricio-githubphoto.jpg';
import MyResume from '../../src/static/resume/Mauricio_Gonzalez\'s_resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutMe() {
    return (
        <div className="container mt-5 text-white">
            <div className="card bg-dark mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={MyPhoto} alt="Mauricio Gonzalez" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">About Me</h1>
                            <p className="card-text">
                                Hello, I'm Mauricio Gonzalez, a first-generation Hispanic Computer Science Student. My journey began at Groundwork Denver at 14, where I was deeply involved in environmental projects. I've worked in tech at Target, served as a Python teaching assistant, and now work as an IT lab tech. My internship at Cisco Meraki as a Network Engineer was a significant step in my career. I am also a mentor for first-generation computer science students, becoming the guide I once needed.
                            </p>
                            <a href={MyResume} download="Mauricio_Gonzalez_Resume.pdf" className="btn btn-primary">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-dark mb-3">
                <div className="card-body">
                    <h2 className="card-title">My Interests</h2>
                    <p className="card-text">
                        Outside of work, my passion for chess, kindled during summers at Groundwork Denver, thrives. It's a game that challenges my strategic thinking and keeps me mentally sharp. Working with nonprofits like Groundwork Denver has instilled a deep sense of gratitude and community focus in me. I've grown to love community-centered work, finding immense satisfaction in contributing to meaningful causes. My high school wrestling experience taught me the importance of urgency, hard work, and commitment. These sports experiences have not only been a source of enjoyment but have also significantly shaped my personal values and work ethic.
                    </p>
                </div>
            </div>
            <div className="card bg-dark mb-3">
                <div className="card-body">
                    <h2 className="card-title">Summary</h2>
                    <p className="card-text">
                        I am deeply passionate about solving problems through technology. My belief that coding empowers one to craft virtually any solution fuels my love for this field. This enthusiasm for technological innovation drives me to continuously explore and create impactful solutions in the tech world.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
