import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignIn from '../container/sign_in';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInFlag: false
    }
  }


  render() {
    return (
      <header className="align-center header">
        <Link to="/" className="header-title">休假去哪裡！</Link>
        <button onClick={() => this.setState({signInFlag: true})}>登入</button>
        { this.state.signInFlag && <SignIn hideSignin={() => this.setState({signInFlag: false})}/> }

      </header>
    );
  }
}

export default Header;