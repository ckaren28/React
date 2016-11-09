webpackHotUpdate(0,{

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(78);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVhY3RfY29tcG9uZW50cy9Nb3ZpZURhdGEuanM/MDExOSJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJwcm9wcyIsIm1vdmllRGF0YSIsIlRpdGxlIiwidW5kZWZpbmVkIiwibW92aWUiLCJZZWFyIiwiaW1kYlJhdGluZyIsIkFjdG9ycyIsIlBsb3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsS0FBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7O0FBRUFDLFFBQU9DLE9BQVAsR0FBaUJILE1BQU1JLFdBQU4sQ0FBa0I7QUFBQTs7QUFDakNDLFdBQVEsWUFBVTtBQUNoQixTQUFHLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsS0FBckIsS0FBK0JDLFNBQWxDLEVBQTRDO0FBQzFDLGNBQU8sZ0NBQVA7QUFDRDtBQUNELFNBQUlDLFFBQVEsS0FBS0osS0FBTCxDQUFXQyxTQUF2QjtBQUNBLFlBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtHLGVBQU1GLEtBQVg7QUFBQTtBQUFvQkUsZUFBTUMsSUFBMUI7QUFBQTtBQUFrREQsZUFBTUU7QUFBeEQsUUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQWVGLGVBQU1HO0FBQXJCLFFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFrQkgsZUFBTUk7QUFBeEI7QUFIRixNQURGO0FBT0Q7QUFiZ0MsRUFBbEIsQ0FBakIsQyIsImZpbGUiOiIwLmJjNWZhOTU2OGE1YjhjZWMwMTY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgaWYodGhpcy5wcm9wcy5tb3ZpZURhdGEuVGl0bGUgPT09IHVuZGVmaW5lZCl7XG4gICAgICByZXR1cm4gPGRpdiAvPlxuICAgIH1cbiAgICB2YXIgbW92aWUgPSB0aGlzLnByb3BzLm1vdmllRGF0YVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+e21vdmllLlRpdGxlfSAoe21vdmllLlllYXJ9KSAtLSBJTURCIFJhdGluZzoge21vdmllLmltZGJSYXRpbmd9PC9oMT5cbiAgICAgICAgPGgyPlN0YXJyaW5nOiB7bW92aWUuQWN0b3JzfTwvaDI+XG4gICAgICAgIDxoMz5EZXNjcmlwdGlvbjoge21vdmllLlBsb3R9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWFjdF9jb21wb25lbnRzL01vdmllRGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=