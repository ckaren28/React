var React = require('react'),
    Box = require('./Box.js')

var App = React.createClass({
  getInitialState: function(){
    return {
      toggleAll: false
    }
  },
  toggleAllBoxes: function(){
    this.setState({
      toggleAll: !this.state.toggleAll
    })
    // return this.state.toggleAll
  },
  render: function(){
    console.log(this.state.toggleAll)
    return (
      <div>
        <button onClick={this.toggleAllBoxes}>Toggle All Boxes</button>
        <div>
          <Box color='black' toggleAll={this.state.toggleAll} />
          <Box color='blue' toggleAll={this.state.toggleAll} />
        </div>
      </div>
    )
  }
})

module.exports = App
