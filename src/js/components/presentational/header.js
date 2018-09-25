import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">休假去哪裡！</Link>
    </header>
  );
};

export default Header;