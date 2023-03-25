import React from 'react';
import PData from '../PData';
import Blog from '../../components/Blog';
import blog7_data from './blog7_data';

function Project7(props) {
    const key = 6;
    return (
        <>
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={blog7_data()} />
        </>
    );
}

export default Project7;