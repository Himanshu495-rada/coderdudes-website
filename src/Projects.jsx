import React from 'react';
import Card from './Card';
import PData from './PData';

const Projects = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Projects</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {PData.map((val, indx) => {
                                return <Card src={val.src} card_title={val.card_title} card_description={val.card_description} card_link={val.card_link} key={indx} />
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Projects;