import React, { Component } from 'react';
import Header from './header';
import SignIn from './sign_in';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        { this.props.user.showSignIn && <SignIn/> }
      </div>
    );
  }
}

export default withRouter(
  connect(({user}) => ({
    user
  }))(Layout)
  );