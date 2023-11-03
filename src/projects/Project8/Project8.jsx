import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog8_data from './blog8_data';
import Navbar from '../../components/Navbar';

function Project7(props) {
    const key = 7;
    return (
        <><Navbar />
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog8_data()} />
        </>
    );
}

export default Project7;