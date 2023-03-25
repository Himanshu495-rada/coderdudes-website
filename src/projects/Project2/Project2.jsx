import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog2_data from './blog2_data';

function Project2(props) {
    const key = 1;
    return (
        <>
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog2_data()} />
        </>
    );
}

export default Project2;