import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog4_data from './blog4_data';
import Navbar from '../../components/Navbar';

function Project4(props) {
    const key = 3;
    return (
        <><Navbar />
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog4_data()} />
        </>
    );
}

export default Project4;