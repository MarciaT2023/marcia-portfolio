import { FC, useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  className?: string;
}

const Typewriter: FC<TypewriterProps> = ({ text, delay, className }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <div className={className}>
      {currentText}
      <span>&nbsp;</span>
    </div>
  );
};

export default Typewriter;
