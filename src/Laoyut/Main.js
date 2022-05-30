import React from "react"
// import Movie from "../Component/Movie"
import Movies from "../Component/Movies"
import "../Laoyut/Main.css"
import Loader from "../Component/Loader"
import Search from "../Component/Search"
export default class Main extends React.Component {
    state = {
        movies: []
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=afff8335&s=panda')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    searchMovies=(str, type = 'all')=> {
        fetch(`http://www.omdbapi.com/?apikey=afff8335&s=${str}${type !== 'all' ? `&type =${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    render (){

        return(
            <div className="main  ">  
             <Search searchMovie={this.searchMovies}/>  
                {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Loader/>}
            </div>
        )
    }
}