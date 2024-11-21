import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">BMI</div>
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/links/about">About</Link>
            </li>
            <li>
              <Link href="/links/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-join">Join Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
