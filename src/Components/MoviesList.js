import React from 'react'
import MovieCard from './MovieCard'
import { MovieDesc } from './MovieDesc'

const MoviesList = (props) => {
    return (

        <div>
            {
                props.MoviesArray.map(movie => 
                <MovieCard 
                  movie={movie} 
                />
                )
            }
            
        </div>
    )
}

export default MoviesList