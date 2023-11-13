import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    const renderSkills = (skills) => {
        return skills.split(', ').reduce((acc, skill, index) => {
            const line = Math.floor(index / 12);
            if (!acc[line]) {
                acc[line] = [];
            }
            acc[line].push(skill);
            return acc;
        }, []).map((skillLine, index) => (
            <div key={index} className="skill-line">
                {skillLine.join(', ')}
            </div>
        ));
    };

    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image} alt={project.name} />
            <div className="skills">
                <b>Skills:</b>
                <div className="skills-list">
                    {renderSkills(project.skills)}
                </div>
            </div>
            <GitHubIcon />
        </div>
    );
}

export default ProjectDisplay;
