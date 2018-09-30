import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showSignIn } from '../../actions';
import ScrollBackToTop from '../../components/widget/scroll_back_to_top';

class Header extends Component {
  signInInfo({info:{email}, errType}) {
    if(email && !errType) {
      return (
        <a className="btn btn-link header-right"
        >你好，{email}</a>
      )
    } else {
      return (
        <a
          className="btn btn-link header-right"
          title="記錄你的口袋景點吧！"
          onClick={() => this.props.showSignIn(true)}
        >登入</a>
      )
    }
  }

  render() {
    const { history, location:{ pathname } } = this.props;
    const isIndex = pathname === "/";

    return (
      <header className="align-center header sticky-header">
        <div className="header-title">
          {!isIndex && (
            <a title="返回"
              className="arrow-back"
              onClick={history.goBack}>&lt;</a>
          )}
          <Link to="/" className="header-title">休假去哪裡！</Link>
        </div>
        { this.signInInfo(this.props.user) }
        <ScrollBackToTop/>
      </header>
    );
  }
}

export default withRouter(connect(
  ({user}) => ({user}),
  {showSignIn}
)(Header));