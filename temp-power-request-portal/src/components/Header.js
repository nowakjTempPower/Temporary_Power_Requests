import React from 'react';

const Header = () => (
  <header>
    <img src={`${process.env.PUBLIC_URL}/southwire-logo.png`} alt="Southwire Logo" />
    <h1>Temporary Power Team Request Portal</h1>
  </header>
);

export default Header;