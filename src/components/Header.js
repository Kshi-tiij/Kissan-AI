import React from 'react';
import copilotImg1 from "../images/logo.png";
const Header = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      <img src={copilotImg1} alt="KissanAI Logo" style={{ height: '50px' }} />
      <h1>Pioneering Generative AI for Agriculture</h1>
    </header>
  );
};

export default Header;
