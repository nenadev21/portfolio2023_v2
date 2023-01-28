import React from 'react';
import profileImg from '../assets/img-dvera-square.jpg';

const HeroSection = () => {
  return (
    <div className='flex items-center justify-center flex-col py-20'>
      <div>
        <img
          src={profileImg}
          className='rounded-full w-32 shadow-lg'
          alt='dani-profile'
        />
      </div>
      <div className='text-center'>
        <h1 className='text-center text-2xl md:text-4xl mb-1 md:mb-3 text-purple-600 font-semibold dark:text-purple-500'>
          Hi! I'm Daniela{' '}
        </h1>
        <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>
          I use technology to make a positive impact in the world
        </p>
      </div>

      <div>
        <a
          href='#'
          className='inline-block px-8 py-3 border border-transparent text-base front-medium rounded-md text-white bg-purple-600 hover:bg-purple-800 md:text-md'
        >
          Projects
        </a>
        <a>Resume</a>
      </div>
    </div>
  );
};

export default HeroSection;
