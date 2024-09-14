import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import HeroComponent from './components/hero/HeroComponent';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const App = () => {
  return (
    <>
      <Header headerClassName="header">
        <Navbar links={links} listClassName="" itemClassName="" />
      </Header>
      <HeroSection />
      <main>
        <div className="content">
          <h1>About</h1>
        </div>
      </main>
    </>
  );
};

export default App;
