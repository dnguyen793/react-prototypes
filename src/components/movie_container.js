import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(url).then((resp)=>{
            // console.log('resp:', resp);
            this.setState({
                movies: resp.data.feed.entry
            })
        })
    }

    render(){
        console.log('this state:', this.state)
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie key={index} info={movieInfo}/>
        })

        return(
            <div>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;