var React = require('react')

var App = React.createClass({
  render: function(){
    var subcontents = [];
    for(var idx=0; idx<3; idx++){
      subcontents.push(<div key={idx} className="subcontents"></div>);
    }
    return (
      <div id='wrapper'>
        <div id="header"></div>
        <div id="navigation"></div>
        <div id="main_content">
          {subcontents}
          <div id="advertisement"></div>
        </div>
      </div>
    )
  }
})

module.exports = App
