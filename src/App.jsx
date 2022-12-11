import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Navbar from './Navbar';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';

import Footer from './Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={Home()} />
                <Route path='/contact' element={Contact()} />
                <Route path='/about' element={About()} />
                <Route path='/projects' element={Projects()} />
                <Route path='project1' element={Project1()} />
                <Route path='project2' element={Project2()} />
                <Route path='project3' element={Project3()} />
                <Route path='project4' element={Project4()} />
                <Route path='project5' element={Project5()} />
                <Route path='project6' element={Project6()} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </>
    )

}

export default App;