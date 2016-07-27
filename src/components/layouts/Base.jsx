import React from "react";
import { Route, DefaultRoute } from "react-router";

var Base = React.createClass({

  render: function() {
  	return (
      <div id="container">
          {this.props.children}
      </div>
    );
  }

});

export default Base;
