import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { showSignIn, fetchUser } from "../../actions";
import ScrollBackToTop from "../widget/scroll_back_to_top";
import NavList from "./navlist";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavFlag: false
    }
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  signInInfo({ info: { email }, errType }) {
    if (email && !errType) {
      return (
        <div className="nav-wrap btn btn-link header-right"
          tabIndex="0"
          onClick={()=> this.setState({showNavFlag: !this.state.showNavFlag})}
          onBlur={()=> this.setState({showNavFlag: false})}
          >
          <span>{email}</span>
          <NavList show={this.state.showNavFlag}/>
        </div>
      );
    } else {
      return (
        <a
          className="btn btn-link header-right"
          title="記錄你的口袋景點吧！"
          onClick={() => this.props.showSignIn(true)}
        >
          登入
        </a>
      );
    }
  }

  render() {
    const {
      history,
      location: { pathname }
    } = this.props;
    const isIndex = pathname === "/";

    return (
      <header className="align-center header sticky-header">
        <div>
          {!isIndex && (
            <a title="返回" className="arrow-back" onClick={history.goBack}>
              &lt;
            </a>
          )}
          <Link to="/" className="header-title">
            休假去哪裡！
          </Link>
        </div>
        {this.signInInfo(this.props.user)}
        <ScrollBackToTop />
      </header>
    );
  }
}

export default withRouter(
  connect(
    ({ user }) => ({ user }),
    { showSignIn, fetchUser }
  )(Header)
);
