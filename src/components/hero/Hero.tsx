import { FC, ReactNode } from 'react';
import '../hero/hero.css';

interface HeroProps {
  children?: ReactNode;
  description?: string;
  className?: string;
}

const Hero: FC<HeroProps> = ({ description, children, className = '' }) => {
  return (
    <div className={`hero-container ${className}`}>
      {children}
      <div className="hero-description">{description}</div>
    </div>
  );
};

export default Hero;
