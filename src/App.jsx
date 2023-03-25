import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Project1 from './projects/Project1/Project1';
import Project2 from './projects/Project2/Project2';
import Project3 from './projects/Project3/Project3';
import Project4 from './projects/Project4/Project4';
import Project5 from './projects/Project5/Project5';
import Project6 from './projects/Project6/Project6';
import Project7 from './projects/Project7/Project7';

import Course1 from './courses/Course1/Course1';

import Footer from './components/Footer';
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
                <Route path='/courses' element={Courses()} />
                <Route path='/course1' element={Course1()} />
                <Route path='/projects' element={Projects()} />
                <Route path='project1' element={Project1()} />
                <Route path='project2' element={Project2()} />
                <Route path='project3' element={Project3()} />
                <Route path='project4' element={Project4()} />
                <Route path='project5' element={Project5()} />
                <Route path='project6' element={Project6()} />
                <Route path="project7" element={Project7()} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </>
    )

}

export default App;