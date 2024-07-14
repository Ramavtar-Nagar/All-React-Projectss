import React, { Component } from 'react';
import MovieCard from "./Moviecard";

export default class MovieList extends Component {
    constructor(){
        super();
        this.state = {
            movies: [{
                title: 'The Avengers',                  
                plot:
                  "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                poster:
                  'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                rating: '8.0',            
                price: 99,            
                star: 0,
                fav: false,
                isInCart: false                  
              },
              {
                title: 'The Dark Knight',                  
                plot:
                  'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                poster:
                  'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                rating: '9.0',            
                price: 199,            
                star: 0,            
                fav: false,
                isInCart: false                  
              },
              {
                title: 'Iron Man',                 
                plot:
                  'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                poster:
                  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                rating: '7.9',            
                price: 139,            
                star: 0,            
                fav: false,
                isInCart: false                  
              }
            ]
        }
    }

    handleIncStar = (movie) => {
        const {movies} = this.state;
        const movieIndex = movies.indexOf(movie);

        if(movies[movieIndex].star >= 5){
            return;
        }

        movies[movieIndex].star += 0.25;

        this.setState({
            movies:movies
            // short hand way
            // movies
        })

    }

  render() {
    // we need this line of code to pass props individually one by one with a name
    // const {title, plot, price, rating, stars, fav, isIncart, poster} = this.state.movies;
    const {movies} = this.state;
    return (
        <>
        {movies.map((movie) => <MovieCard movies = {movie} addStars = {this.handleIncStar} />)}
        </>
    )
  }
}