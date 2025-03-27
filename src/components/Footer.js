import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f8f8' }}>
      <nav>
        <a href="#chat" style={{ marginRight: '15px' }}>Chat</a>
        <a href="#news" style={{ marginRight: '15px' }}>News</a>
        <a href="#about">About</a>
      </nav>
      <p>© KissanAI, 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
