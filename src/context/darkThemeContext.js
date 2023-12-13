import { createContext, useState, useEffect } from 'react';

const DarkContext = createContext({});

const DarkProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        setDarkMode(savedMode === 'dark');
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('mode', newMode ? 'dark' : 'light');
        // console.log(localStorage.getItem('mode'), darkMode)
    }

    return (
        <DarkContext.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </DarkContext.Provider>
    )
}

export { DarkContext, DarkProvider };