import React from 'react';
import { NavLink } from 'react-router-dom';

function blog6_data() {
    return (
        <>
            <p>We are building time lapse camera using esp32 cam module with the help of micropython which is a similar to the python.
                Which will make it more easier with less lines of code, all the code and recourses are provided below in download section.</p>
            <h2 className="my-3">ESP32 Camera module</h2>
            <NavLink to="/project5" >Check out</NavLink>
            <h2 className="my-3">Micropython</h2>
            <p>MicroPython is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments.</p>
            <p>MicroPython is packed full of advanced features such as an interactive prompt, arbitrary precision integers, closures, list comprehension, generators, exception handling and more. Yet it is compact enough to fit and run within just 256k of code space and 16k of RAM.</p>
        </>
    );
}

export default blog6_data;