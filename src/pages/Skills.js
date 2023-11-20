import React from 'react';
import { Radar, Pie } from 'react-chartjs-2';
import '../styles/Skills.css';
import WordCloud from 'react-wordcloud';
import { useState } from 'react';
import { useScrollFadeIn} from "../hooks/useHome";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement
} from 'chart.js';


// Register necessary components for Chart.js
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement
);
const goldColor ='#C5B783';

const SkillWheel = () => {

    const data = {
        labels: ['Python', 'Java', 'C++', 'C#', 'HTML', 'CSS', 'JavaScript', 'React', 'PHP'],
        datasets: [
            {
                label: 'Programming Skills',
                backgroundColor: 'rgba(34, 202, 236, .2)',
                borderColor: 'rgba(34, 202, 236, 1)',
                pointBackgroundColor: 'rgba(34, 202, 236, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
                data: [85, 80, 75, 85, 70, 70, 70, 70, 60]
            }
        ]
    };


    return (
        <div className="chart" {...useScrollFadeIn()}>
            <Radar data={data} />
        </div>
    );

};



const OperatingSystemsChart = () => {
    const data = {
        labels: ['Linux', 'macOS', 'Windows'],
        datasets: [
            {
                label: 'Operating Systems',
                data: [70, 60, 85],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    let ans = <h1 style={{ color: goldColor }}>Operating Systems</h1>;
    return (
        <div className="chart" {...useScrollFadeIn()}>
            {ans}
            <Pie data={data} />
        </div>
    );

};

const DevelopmentSkillsDisplay = () => {
    const skills = [
        { name: 'Agile', level: 'Experienced' },
        { name: 'Data Structures', level: 'Experienced' },
        { name: 'Algorithms', level: 'Intermediate' },
        { name: 'Databases', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' },
        { name: 'Scrum', level: 'Experienced' },
        { name: 'Networking', level: 'Experienced' },
        { name: 'Cybersecurity', level: 'Intermediate' }
    ];
    const levelToWidth = (level) => {
        switch (level) {
            case 'advanced':
                return '100%';
            case 'Experienced':
                return '75%';
            case 'Intermediate':
                return '60%';
            case 'Beginner':
                return '25%';
            default:
                return '0%';
        }
    }

    return (
        <div className="container" {...useScrollFadeIn()}>
            <h1 style={{ color: goldColor }}>Development Skills</h1>
            {skills.map((skill, index) => (
                <div key={index} className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <span className="skill-name" >{skill.name}</span>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="progress mb-2">
                            <div
                                className={`progress-bar bg-primary`}
                                style={{ width: levelToWidth(skill.level) }}
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                {skill.level}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SkillsWordCloud = () => {
    const [filteredWords, setFilteredWords] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const words = [
        // Development Skills (e.g., Blue)
        { text: 'Agile Development', value: 50, color: 'blue', category: 'Development' },
        { text: 'Data Structures', value: 45, color: 'blue', category: 'Development' },
        { text: 'Algorithms', value: 40, color: 'blue', category: 'Development' },
        { text: 'Databases', value: 35, color: 'blue', category: 'Development' },
        { text: 'Git', value: 30, color: 'blue', category: 'Development' },
        { text: 'Scrum', value: 25, color: 'blue', category: 'Development' },
        { text: 'Networking', value: 20, color: 'blue', category: 'Development' },
        { text: 'Cybersecurity', value: 15, color: 'blue', category: 'Development' },

        // Frameworks & Tools (e.g., Green)
        { text: 'NPM', value: 40, color: 'green', category: 'Frameworks' },
        { text: 'Node.js', value: 35, color: 'green', category: 'Frameworks' },
        { text: 'Express.js', value: 30, color: 'green', category: 'Frameworks' },
        {text: 'Maven', value: 30, color: 'green', category: 'Frameworks'},


        // Professional Skills (e.g., Red)
        { text: 'Leadership', value: 30, color: 'red', category: 'Professional' },
        { text: 'Collaboration', value: 25, color: 'red', category: 'Professional' },
        { text: 'Communication', value: 20, color: 'red', category: 'Professional' },
        { text: 'Problem Solving', value: 30, color: 'red', category: 'Professional' },
        { text: 'Time Management', value: 20, color: 'red', category: 'Professional' },
        {text: 'Project Management', value: 20, color: 'red', category: 'Professional'},

        // Testing Proficiency (e.g., Orange)
        { text: 'GitHub Actions', value: 15, color: 'orange', category: 'Testing' },
        { text: 'Jest', value: 20, color: 'orange', category: 'Testing' },
        { text: 'JUnit', value: 20, color: 'orange', category: 'Testing' },
        { text: 'Selenium', value: 15, color: 'orange', category: 'Testing' },
        { text: 'Postman', value: 20, color: 'orange', category: 'Testing' },



        // Language Proficiency (e.g., Purple)
        { text: 'Spanish Fluency', value: 20, color: 'purple', category: 'Language' },
        { text: 'English Fluency', value: 20, color: 'purple', category: 'Language'}
        // ... other languages
    ];

    const getWordColor = (word) => word.color;

    const options = {
        rotations: 1,
        rotationAngles: [0, 90],
        fontSizes: [10, 50],
        color: getWordColor,
        deterministic: true,
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        const filtered = words.filter((word) => word.category === category);
        setFilteredWords(filtered);
    };

    return (
        <div {...useScrollFadeIn()}>
            <h1 style={{ color: goldColor }}>Skills Word Cloud</h1>
            <div className="word-cloud-legend">
                <p onClick={() => handleCategoryClick('Development')}><span style={{ color: 'blue' }}>■</span> Development Skills</p>
                <p onClick={() => handleCategoryClick('Frameworks')}><span style={{ color: 'green' }}>■</span> Frameworks & Tools</p>
                <p onClick={() => handleCategoryClick('Professional')}><span style={{ color: 'red' }}>■</span> Professional Skills</p>
                <p onClick={() => handleCategoryClick('Testing')}><span style={{ color: 'orange' }}>■</span> Testing Proficiency</p>
                <p onClick={() => handleCategoryClick('Language')}><span style={{ color: 'purple' }}>■</span> Language Proficiency</p>
                <p onClick={() => handleCategoryClick('')}><span style={{ color: 'black' }}>■</span> All Skills</p>
            </div>
            <WordCloud words={filteredWords.length > 0 ? filteredWords : words} options={options} />
        </div>
    );
};

const Skills = () => {
    return (
        <div>
            <SkillWheel />
            <OperatingSystemsChart />
            <DevelopmentSkillsDisplay />
            <SkillsWordCloud />
        </div>
    );
};

export default Skills;