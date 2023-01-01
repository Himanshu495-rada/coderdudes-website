import React from 'react';
import Blog from '../Blog';
import CData from '../CData';

function Course1() {

    const key = 0;
    return (
        <div>
            <Blog card_title={CData[key].card_title}
                card_emb_link={CData[key].card_emb_link}
                card_code_link={CData[key].card_code_link}
                blog_data={CData[key].blog_data} />
        </div>
    );
}

export default Course1;