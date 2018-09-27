import React, { Component } from 'react';
import Header from '../components/presentational/header';
import SignIn from '../components/container/sign_in';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Header/>
        { this.props.user.showSignIn && <SignIn/> }
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user}
}

export default withRouter(connect(mapStateToProps)(Layout));