import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <div className='col-md-4 col-10 mx-auto'>
            <div className="card" >
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.card_title}</h5>
                    <p className="card-text">{props.card_description}</p>
                    <NavLink to={props.card_link} className="btn ">Explore</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Card;