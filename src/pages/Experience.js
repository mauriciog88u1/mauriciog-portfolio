import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/Experince.css";
import {Link} from "react-router-dom";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline>
                {/* Work Experience 2 (Most Current) */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2023 - Current"
                    iconClassName="work-icon"
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        IT Lab Technician, Colorado State University
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Fort Collins, Colorado
                    </h4>
                    <p>
                        Maintained network infrastructure, automated tasks with shell
                        scripting, and contributed to cybersecurity initiatives.
                    </p>
                </VerticalTimelineElement>

                {/* Work Experience 4 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Fall 2022 - Current"
                    iconClassName="work-icon"
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Latinx Computer Science Mentor, Colorado State University
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Fort Collins, Colorado
                    </h4>
                    <p>
                        Mentor 15-20 Hispanic first-generation students in Computer Science.
                    </p>
                </VerticalTimelineElement>

                {/* Work Experience 1 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2023 - Aug 2023"
                    iconClassName="work-icon"
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Network Engineer Intern, Cisco Meraki
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Chicago, Illinois
                    </h4>
                    <p>
                        Developed networking skills, aided in product development and
                        enhancement, automated solutions, and strengthened network security.
                    </p>
                    <p>
                        Worked with various Cisco Meraki products and troubleshooted
                        various networking-related issues.
                    </p>
                </VerticalTimelineElement>

                {/* Work Experience 3 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2019 - Aug 2022"
                    iconClassName="work-icon"
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Youth Supervisor, Groundwork Denver
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Denver, Colorado</h4>
                    <p>
                        Automated processes, led community projects, fostered team growth,
                        and managed a team of 6 youth.
                    </p>
                </VerticalTimelineElement>

                {/* Education */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Expected May 2024"
                    iconClassName="education-icon"
                    icon={<Link to="/education" className="education-icon"> <SchoolIcon /> </Link>}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bachelor of Science in Computer Science
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Colorado State University, Fort Collins, Colorado
                    </h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
