import { FC, ReactNode } from 'react';
import Typewriter from '../typewriter/Typewriter';
import '../hero/hero.css';

interface HeroProps {
    children?: ReactNode;
    title?: string;
  }

const Hero: FC = () => {
    return (
        <div className="hero-container">
          <Typewriter className="hero-title" text="Marcia Merritt" delay={700} />
          <div className="hero-description">
            I am a web developer at MemSQL. My passion is building simple,
            beautiful user experiences.<br />Check out my{' '}
          </div>
        </div>
      );
}

export default Hero;