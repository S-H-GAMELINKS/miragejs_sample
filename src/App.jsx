import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('/api/movies').then((response) => {
      const movies = response.data["movies"];
      this.setState({movies: movies});
      console.log(this.state.movies)
    }, (error) => {
      alert(error);
    })
  }

  render() {
    const movies = this.state.movies;
    return (
      <div className="App">
        <ul>
          {movies.map(movie => (
            <li>{movie.id}{movie.name}</li>
          ))}
        </ul>
      </div>
    )
  };
};

export default App;
