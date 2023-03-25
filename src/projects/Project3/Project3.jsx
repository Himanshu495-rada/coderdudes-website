import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog3_data from './blog3_data';

function Project3(props) {
    const key = 2;
    return (
        <>
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog3_data()} />
        </>
    );
}

export default Project3;