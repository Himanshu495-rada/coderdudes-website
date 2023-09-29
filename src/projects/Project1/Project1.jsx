import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog1_data from './blog1_data';
import Navbar from '../../components/Navbar';

function Project1(props) {

    const key = 0;
    return (
        <>
            <Navbar />
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog1_data()} />
        </>
    );
}

export default Project1;