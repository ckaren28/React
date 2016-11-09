var React = require('react')
var Box = React.createClass({
    getInitialState: function(){
      //Invoked once before the component is mounted. The return value will be used as the initial value of this.state.
      return {
        display: this.props.toggleAll
      }
    },
    toggleDisplay: function(){
      this.setState({
        display: !this.state.display
      })
    },
    componentWillReceiveProps(nextProps){
      //called when the props have changed and when this is not an initial rendering.
      this.setState({
        display: nextProps.toggleAll
      });
    },
    render: function (){
        var displayClass = (this.state.display) ? 'show' : 'hide'
        return (
          <div className='box-holder'>
            <button onClick={this.toggleDisplay}>
              Toggle {this.props.color} box
            </button>
            <div className={displayClass+' '+this.props.color}>
            </div>
          </div>
        )
    }
})

module.exports = Box
