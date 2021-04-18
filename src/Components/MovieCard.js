import React from 'react'
import './movieCard.css'
import ReactPlayer from "react-player"
import { MovieDesc } from './MovieDesc'
import moviesListData from '../assets/movies';
import { Link, Route } from 'react-router-dom';

const MovieCard = (props) =>{

    console.log(props)

    
    return (
        <div className="yosra">
            <p>{props.movie.id}</p>
            <p>{props.movie.nom}</p>
            <img src={props.movie.imgSrc}/>
            <p>{props.movie.rate}</p>
            
        </div>
    )
}

export default MovieCard
