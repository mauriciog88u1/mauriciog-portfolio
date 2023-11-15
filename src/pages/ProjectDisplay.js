// ProjectDisplay.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import Unlock from "./Unlock"; // Import Unlock component
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const [showUnlockModal, setShowUnlockModal] = useState(false);

    const handleVisitProject = () => {
        if (project.link) {
            window.open(project.link, "_blank");
        } else {
            // No link, show the unlock modal
            setShowUnlockModal(true);
        }
    };
    const handleVisitGithub = () => {
        if(project.github){
            window.open(project.github, "_blank");
            }
        else {
            setShowUnlockModal(true);
        }
    }

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col lg={8}>
                        <Card className="text-center">
                            <Card.Img variant="top" src={project.image} alt={project.name} />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Button variant="outline-primary" onClick={handleVisitProject}>
                                    Visit Project
                                </Button>
                                <Button variant="outline-secondary"  onClick={handleVisitGithub}>
                                    <GitHubIcon />
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <small>Skills used: {project.skills}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Unlock
                showModal={showUnlockModal}
                handleClose={() => setShowUnlockModal(false)}
                projectName={project.name}
            />
        </>
    );
}

export default ProjectDisplay;
