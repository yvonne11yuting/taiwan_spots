import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSignIn } from '../../actions';
import { withRouter } from 'react-router-dom';
class Header extends Component {
  render() {
    const { history, location:{ pathname } } = this.props;
    const isIndex = pathname === "/";
    return (
      <header className="align-center header sticky-header">
        <div className="header-title">
          {!isIndex && (
            <a title="返回"
              onClick={history.goBack}>&lt;</a>
          )}
          <Link to="/" className="header-title">休假去哪裡！</Link>
        </div>
        <a
          className="btn btn-link header-right"
          title="記錄你的口袋景點吧！"
          onClick={() => this.props.showSignIn(true)}
        >登入</a>
      </header>
    );
  }
}

export default withRouter(connect(null, {showSignIn})(Header));