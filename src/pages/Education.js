import React from 'react';
import {classList} from "../helpers/ClassList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/styles/Education.css';
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
            {sortedClasses.map((classItem, index) => (
                <div key={index} className="row mb-3 pb-2 border-bottom border-white">
                    <div className="col-12 text-center">
                        <h3>{classItem.courseName} ({classItem.courseCode})</h3>
                        <p>Semester: {classItem.semester}</p>
                        <p>Skills Used: {classItem.technologiesLearned}</p>
                        <p>Description: {classItem.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EducationPage;
