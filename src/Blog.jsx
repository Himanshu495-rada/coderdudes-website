import React from 'react';

function Blog(props) {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>{props.card_title}</h1>
            </div>
            <div className='container blog_div'>
                <div className='row'>
                    <div className='col-md-6 col-10  mx-auto header-img'>

                        <iframe className="iframe-fluid mb-4" width="100%" height="350" src={props.card_emb_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        {props.blog_data}
                        <h2 className='my-3'>Download Code</h2>
                        <div className="my-3 text-center">
                            <a href={props.card_code_link} className="btn btn-primary" target="_blank" rel="noreferrer">Download</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;