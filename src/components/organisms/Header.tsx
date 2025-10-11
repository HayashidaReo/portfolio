import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          {/* ロゴエリア */}
          <h1>Portfolio</h1>
        </div>
        <nav className="navigation">
          {/* ナビゲーションエリア */}
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#social">Social</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
