import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog6_data from './blog6_data';

function Project6(props) {
    const key = 5;
    return (
        <>
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog6_data()} />
        </>
    );
}

export default Project6;