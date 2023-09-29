import React from 'react';
import animation from '../assets/telegram-animation.json'
import Lottie from 'react-lottie';
import Navbar from './Navbar';

const Contact = () => {

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
            <Navbar />
            <section id='header' className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Please contact me via <strong className="brand-name" style={{ color: "#0088cc" }} >Telegram</strong>
                                    </h1>
                                    <div className="mt-3">
                                        <a href="https://www.telegram.me/himyaa702" className="btn"> Contact me</a>
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

export default Contact;