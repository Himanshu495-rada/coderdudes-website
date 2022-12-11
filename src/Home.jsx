import React from 'react';
import { NavLink } from 'react-router-dom';
import animation from './assets/coding-animation.json';
import Lottie from 'react-lottie';

const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <section id='header' className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Wanna grow your business using <strong className="brand-name" style={{ color: "#0000ff" }} >Programming</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of talented developer making websites, apps, and cool stuff
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/projects" className="btn"> Check it out</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <Lottie options={defaultOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home;