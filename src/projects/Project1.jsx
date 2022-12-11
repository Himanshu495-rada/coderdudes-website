import React from 'react';
import PData from '../PData';
import Blog from '../Blog';
function Project1(props) {

    const key = 0;
    return (
        <>
            <Blog card_title={PData[key].card_title}
                card_emb_link={PData[key].card_emb_link}
                card_code_link={PData[key].card_code_link}
                blog_data={PData[key].blog_data} />
        </>
    );
}

export default Project1;