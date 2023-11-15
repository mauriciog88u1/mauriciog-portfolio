// Unlock.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Unlock = ({ showModal, handleClose, projectName }) => {
    const [unlockCode, setUnlockCode] = useState('');
    const [userIP, setUserIP] = useState('');

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setUserIP(data.ip))
            .catch(() => alert('Unable to fetch IP address.'));
    }, []);

    const handleUnlock = (e) => {
        console.log(userIP);
        if (unlockCode === userIP) { // very insecure as someone can just find this is inspect element but its just so i can get contacted
            alert("Correct code. Please wait while I redirect you to the project.")
            getUnlockCode(projectName);

        } else {
            alert("Incorrect code. Please try again or contact me for access.");
        }
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Unlock Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Enter Unlock Code Or Contact Me for Project Zip Files</p>
                <Button variant="outline-primary" href="mailto:mauricio@gonzalez-medina.com">
                    Contact Me
                </Button>
                <Form onSubmit={handleUnlock}>
                    <Form.Group>
                        <Form.Label>Enter Unlock Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Unlock Code"
                            value={unlockCode}
                            onChange={(e) => setUnlockCode(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Unlock
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

function getUnlockCode(projectName) {
    const url = "https://git.sr.ht/~maur88u1/";
    for (let i = 0; i < projectName.length; i++) {
        if (projectName[i] === " ") {
            projectName = projectName.replace(" ", "-");
        }
    }
    return window.open(url + projectName, "_blank");
}
export default Unlock;
