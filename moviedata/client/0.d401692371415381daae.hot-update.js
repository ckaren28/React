webpackHotUpdate(0,{

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'exports',

	  getInitialState: function () {
	    return {
	      searchTerm: ""
	    };
	  },
	  handleSearchTermChange: function (e) {
	    this.setState({
	      searchTerm: e.target.value
	    });
	  },
	  // sendSearchQuery will call the
	  sendSearchQuery: function (e) {
	    e.preventDefault();
	    this.props.getMovieData(this.state.searchTerm);
	    this.setState({
	      searchTerm: ''
	    });
	  },
	  render: function () {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'form',
	        { onSubmit: this.sendSearchQuery },
	        'Search movie: ',
	        React.createElement('input', { type: 'text', value: this.state.searchTerm, onChange: this.handleSearchTermChange }),
	        React.createElement('input', { type: 'submit', value: 'Submit' })
	      )
	    );
	  }
	});

/***/ }

})