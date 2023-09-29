import React from 'react';
import Blog from '../../components/Blog';
import CData from '../CData';
import course1_data from './course1_data';
import Navbar from '../../components/Navbar';

function Course1() {

    const key = 0;
    return (
        <div>
            <Navbar />
            <Blog card_title={CData[key].card_title}
                card_emb_link={CData[key].card_emb_link}
                card_code_link={CData[key].card_code_link}
                blog_data={course1_data()} />
        </div>
    );
}

export default Course1;