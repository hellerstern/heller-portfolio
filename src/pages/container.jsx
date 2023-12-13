import { useContext } from 'react';

import { DarkContext } from '../context/darkThemeContext';

import Home from './home';
import About from './about';
import Blogs from './blogs';
import Projects from './projects';
import Contact from './contact';
import NotFound from './notFound';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Navigate,
} from "react-router-dom";
import LayoutHeader from '../component/layoutHeader';
import LayoutFooter from '../component/layoutFooter';



export default function Container() {

    const { darkMode } = useContext(DarkContext);

    return (
        <div className={`background-${darkMode} `}>
            <LayoutHeader />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <LayoutFooter />

        </div>
    )
}
