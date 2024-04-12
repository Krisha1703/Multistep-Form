import React from 'react';

export default function MathStepContainer({ src, category, description, width, onClick, isActive }) {
  const handleContainerClick = () => {
    onClick(); // Notify the parent component that this step container is clicked
  };

  return (
    <form
      //For screen size greater than 640px the margin-bottom is 20, while for other screen size it is 5.
      //For screen size greater than 640px the width/height is 52, while for other screen size it is 48.
      className={`
        mr-4 sm:mb-20 mb-5 cursor-pointer border border-gray-300 rounded-lg 
        sm:w-52 sm:h-52 w-48 h-48 flex flex-col justify-center items-center 
        ${isActive ? 'border-yellow-500 shadow-md' : ''}`}
        onClick={handleContainerClick} //If the option is clicked, a yellow border with shadow appears
    >
      {/* Image Section */}
      <div className={`${width} h-15 overflow-hidden flex items-center justify-center`}>
        <img src={src} className="h-full w-full pt-10" alt={category} />
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-center items-center p-4 text-center">
        <h2 className="font-semibold text-sm md:text-lg">{category}</h2>
        <p className="mt-2 text-md md:text-xl text-gray-500">{description}</p>
      </div>
      
    </form>
  );
}
