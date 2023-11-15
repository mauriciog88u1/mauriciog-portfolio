import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Projects from "../pages/Projects";
import ProjectDisplay from "../pages/ProjectDisplay";
import Navbar from "../components/Navbar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Projects">
                <Projects/>
            </ComponentPreview>
            <ComponentPreview path="/ProjectDisplay">
                <ProjectDisplay/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;