var React = require('react');
import {withRouter} from 'react-router';

// TODO, this doesn't really do aything.
var LogoutPage = React.createClass({
    
  componentWillMount: function(){

  },
  
  render: function(){

  		return <div></div>;
  },

  handleLogout: function(e){

    this.props.router.push('login');

    return false;

  }
});

export default LogoutPage;