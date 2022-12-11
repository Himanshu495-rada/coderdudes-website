import React from 'react';
import profileImg from './assets/profile.jpg';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section id='header' className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Hi there myself <strong className="brand-name" style={{ color: "#0000ff" }} >Himanshu Tekade</strong> I am a full stack developer
                                    </h1>
                                    <h2 className="my-3">
                                        Thanks to visit my portfolio website and . Please check out my linkedin profile below.
                                    </h2>
                                    <h5>To contact me <NavLink to="/contact">Click here</NavLink></h5>
                                    <div className="mt-3">
                                        <a href="https://www.linkedin.com/in/himanshu-tekade-82034b194/" className="btn" target="_blank" rel="noreferrer"> Linkedin </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={profileImg} className="img-fluid animated" alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default About;