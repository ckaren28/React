var React = require('react'),
    ReactDOM = require('react-dom'),
    MovieSearch = require('./MovieSearch'),
    MovieData = require('./MovieData'),
    axios = require('axios')

module.exports = React.createClass({
  getInitialState: function(){
    return {
      movieData: {}
    }
  },
  getMovieData: function(searchTerm){
    axios.get("http://www.omdbapi.com/?t="+searchTerm+"&y=&plot=short&r=json")
    .then(function(movieData){
      this.setState({
        movieData: movieData.data
      })
    }.bind(this))
    .catch(function(err){
      console.log("Error: ", err)
    })
  },
  render: function(){
    return (
      <div>
        <MovieSearch getMovieData={this.getMovieData}/>
        <MovieData movieData={this.state.movieData}/>
      </div>
    )
  }
})
