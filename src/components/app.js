import React from 'react';
import MovieContainer from './movie_container';

function Container(){
    return(
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MovieContainer />
        </div>
    )
}

export default Container;