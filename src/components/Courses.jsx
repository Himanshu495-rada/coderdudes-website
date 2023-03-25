import React from 'react';
import CData from '../courses/CData';
import Card from './Card';

const Courses = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Courses</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {CData.map((val, indx) => {
                                return <Card src={val.src} card_title={val.card_title} card_description={val.card_description} card_link={val.card_link} key={indx} />
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

};

export default Courses;