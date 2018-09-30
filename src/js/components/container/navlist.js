import React from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../actions';

const NavList = (props) => {
  return (
    <ul className="nav-list" style={{
      display: props.show ? "inline-block" : 'none'
    }}>
      <li className="nav-list-item">口袋名單</li>
      <li className="nav-list-item" onClick={props.userSignOut}>登出</li>
    </ul>
  );
};

export default connect(null, { userSignOut })(NavList);