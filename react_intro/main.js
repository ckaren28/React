// var react = React.createElement('h1', {style: {color:"blue"}}, "I am a headline")
//
// console.log(react)
//
var actualDomNode = document.getElementById('app')
//
// ReactDOM.render(react, actualDomNode)

var NinjaComponent = React.createClass({
  render: function(){
    // Data passed into our component can be found in this.props object
    return React.createElement('div', null,
      React.createElement('h1', {style: {color: this.props.colors[0]}}, this.props.colors[0]+"  Ninja"),
      React.createElement('h1', {style: {color: this.props.colors[1]}}, this.props.colors[1]+"  Ninja"),
      React.createElement('h1', {style: {color: this.props.colors[2]}}, this.props.colors[2]+"  Ninja")
    )
  }
})
// Note that we're passing properties as a second argument in our createElement() call
ReactDOM.render(React.createElement(NinjaComponent, {colors: ['blue', 'red', 'green']}), document.getElementById('app'));
