import './Item.css';
import Time from '../Time/Time.jsx';
import { useState } from 'react';

function Item (props) {
    const {poster, title, year, genres, directors, actors, description, duration} = props;
    const actorsSlice = actors.slice(0, -1);
    

    return(
        <div className='item-container'>
            <div className='poster-container'>
                <img className='poster-img' src={poster} alt="Film" />
            </div>
            <div className='text-container'>
                <div className='titel-time-container'>
                    <a className='link-film' href="#">{title}</a>
                    <Time duration={duration}/>
                </div>
                <p className='film-year-genres'>{year}, {genres}</p>
                <p className='director'>Режиссёр: {directors}</p>
                <p className='actor'>Актёры:</p> <p className='actor-list'>{actorsSlice.map(act => {
                    return(`${act}, `)
                })}{actors.slice(-1)}</p>
                <p className='description-film'>{description}</p>
            </div>
        </div>
    );
};

export default Item;