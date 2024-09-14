import { FC } from 'react';
import './HeroSection.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Button from '../button/Button';

const HeroSection: FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-image">
        <div className="hero-text">
          <h2 className="hero_title">Hello, my name is Marcia.</h2>
          <p className="hero_desc">I'm a full stack developer</p>
          <Button onClick={() => ''}>
            <FaGithubSquare />
          </Button>
          <Button onClick={() => ''}>
            <FaLinkedin />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
