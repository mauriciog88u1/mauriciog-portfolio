import React from 'react';
import {classList} from "../helpers/ClassList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/styles/Education.css';
import Accordion from 'react-bootstrap/Accordion';
function EducationPage() {
    // Custom sort function to sort by year and semester
    const sortedClasses = classList.sort((a, b) => {
        const aSemester = a.semester.split(" ");
        const bSemester = b.semester.split(" ");

        // Compare the years
        if (aSemester[1] < bSemester[1]) {
            return 1;
        } else if (aSemester[1] > bSemester[1]) {
            return -1;
        } else {
            // Compare the semesters
            if (aSemester[0] === "Spring" && bSemester[0] === "Fall") {
                return 1;
            } else if (aSemester[0] === "Fall" && bSemester[0] === "Spring") {
                return -1;
            } else {
                return 0;
            }
        }
    }, 0);

    return (
        <div className="container text-white">
            <h1>Education</h1>
            <p>Here are some of the classes I have taken at Colorado State University. Sorted by most recently taken.</p>
            <Accordion defaultActiveKey="0">
                {sortedClasses.map((classItem, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}>
                        <Accordion.Header>{classItem.courseName} ({classItem.courseCode})</Accordion.Header>
                        <Accordion.Body>
                            <p>Semester: {classItem.semester}</p>
                            <p>Skills Used: {classItem.technologiesLearned}</p>
                            <p>Description: {classItem.description}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default EducationPage;