webpackHotUpdate(0,{

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(78);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVhY3RfY29tcG9uZW50cy9Nb3ZpZVNlYXJjaC5qcz8yNzYzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsInNlYXJjaFRlcm0iLCJoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kU2VhcmNoUXVlcnkiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZ2V0TW92aWVEYXRhIiwic3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsS0FBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7O0FBRUFDLFFBQU9DLE9BQVAsR0FBaUJILE1BQU1JLFdBQU4sQ0FBa0I7QUFBQTs7QUFDakNDLG9CQUFpQixZQUFVO0FBQ3pCLFlBQU87QUFDTEMsbUJBQVk7QUFEUCxNQUFQO0FBR0QsSUFMZ0M7QUFNakNDLDJCQUF3QixVQUFTQyxDQUFULEVBQVc7QUFDakMsVUFBS0MsUUFBTCxDQUFjO0FBQ1pILG1CQUFZRSxFQUFFRSxNQUFGLENBQVNDO0FBRFQsTUFBZDtBQUdELElBVmdDO0FBV2pDO0FBQ0FDLG9CQUFpQixVQUFTSixDQUFULEVBQVc7QUFDMUJBLE9BQUVLLGNBQUY7QUFDQSxVQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0IsS0FBS0MsS0FBTCxDQUFXVixVQUFuQztBQUNBLFVBQUtHLFFBQUwsQ0FBYztBQUNaSCxtQkFBWTtBQURBLE1BQWQ7QUFHRCxJQWxCZ0M7QUFtQmpDVyxXQUFRLFlBQVU7QUFDaEIsWUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsV0FBTSxVQUFVLEtBQUtMLGVBQXJCO0FBQUE7QUFDZ0Isd0NBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS0ksS0FBTCxDQUFXVixVQUFyQyxFQUFpRCxVQUFVLEtBQUtDLHNCQUFoRSxHQURoQjtBQUVBLHdDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBRkE7QUFERixNQURGO0FBUUQ7QUE1QmdDLEVBQWxCLENBQWpCLEMiLCJmaWxlIjoiMC45Y2FlMGVjMTkyYmU3NzUxMDMzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBzZWFyY2hUZXJtOiBcIlwiXG4gICAgfVxuICB9LFxuICBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlOiBmdW5jdGlvbihlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFRlcm06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfSxcbiAgLy8gc2VuZFNlYXJjaFF1ZXJ5IHdpbGwgY2FsbCB0aGVcbiAgc2VuZFNlYXJjaFF1ZXJ5OiBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnByb3BzLmdldE1vdmllRGF0YSh0aGlzLnN0YXRlLnNlYXJjaFRlcm0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hUZXJtOiAnJ1xuICAgIH0pXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZFNlYXJjaFF1ZXJ5fT5cbiAgICAgICAgICBTZWFyY2ggbW92aWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFRlcm19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaFRlcm1DaGFuZ2V9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlYWN0X2NvbXBvbmVudHMvTW92aWVTZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9