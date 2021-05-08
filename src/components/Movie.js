import React from 'react';
import { IMAGES_API } from '../api/movieDB';

const Movie = (props) => {

    const {movieData} = props;
    console.log(movieData);

    const posterCode = movieData.poster_path;
    const poster = IMAGES_API+posterCode;
    const vote_average = movieData.vote_average;
    const randomPoster = "https://images.unsplash.com/photo-1534267933751-06d5943f27f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"

    const getVoteAvgClass = () => {
        if(vote_average > 8)
            return "green";
        else if(vote_average > 5)
            return "yellow";
        return "red";
    }
    
    return (
        <div className="movie">
            <img src={posterCode?poster:randomPoster} alt={movieData.title}/>
            <div className="movie-info">
                <h3>{movieData.title}</h3>
                <span className={`tag ${getVoteAvgClass()}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>OverView</h2>
                <p>{movieData.overview}</p>
            </div>
        </div>
    )
}

export default Movie;
