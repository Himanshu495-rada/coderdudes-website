import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog5_data from './blog5_data';

function Project5(props) {
    const key = 4;
    return (
        <>
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog5_data()} />
        </>
    );
}

export default Project5;