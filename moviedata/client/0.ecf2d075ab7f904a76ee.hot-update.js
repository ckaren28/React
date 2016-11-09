webpackHotUpdate(0,{

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'exports',

	  render: function () {
	    if (this.props.movieData.Title === undefined) {
	      return React.createElement('div', null);
	    }
	    var movie = this.props.movieData;
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        movie.Title,
	        ' (',
	        movie.Year,
	        ') -- IMDB Rating: ',
	        movie.imdbRating
	      ),
	      React.createElement(
	        'h2',
	        null,
	        'Starring: ',
	        movie.Actors
	      ),
	      React.createElement(
	        'h3',
	        null,
	        'Description: ',
	        movie.Plot
	      )
	    );
	  }
	});

/***/ }

})