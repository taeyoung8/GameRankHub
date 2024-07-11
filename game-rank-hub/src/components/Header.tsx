// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
        <nav>
          <ul>
          <div>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">About</Link> </span>
            </div>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
