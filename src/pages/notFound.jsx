import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";

const NotFound = () => {

    const { darkMode } = useContext(DarkContext);

    return (
        <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex  shadow-lg`}>
            <p>Not Found</p>
        </div>
    )
}

export default NotFound;