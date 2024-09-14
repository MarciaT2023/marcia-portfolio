import React from 'react';
import heroImage from '../../assets/heroimage_1024.jpg';

export default function HeroComponent() {
  return (
    <div className="bg-[url(${heroImage})] h-96 w-full bg-cover bg-center p-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl font-bold text-center">Hero section with background image</h1>
        <p className="text-lg text-center text-white">
          This isLorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-4">
          <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">Get started</button>
        </div>
      </div>
    </div>
  );
}
