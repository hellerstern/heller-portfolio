import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";
import ProjectContainer from "../component/projectContainer";


const Projects = () => {

    const { darkMode } = useContext(DarkContext);

    return (
        <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex  flex-col shadow-lg max-[360px]:px-4`}>
            <h1 className="font-black text-4xl leading-[50px] uppercase pt-24 pb-12 px-36 max-sm:px-4 max-sm:py-4">My Work</h1>
            <ProjectContainer />
        </div>
    )
}

export default Projects;