import React from 'react';
import { myProjects } from '../config';

const Projects = () => {
  return (
    <>
      <div className='container px-6 py-10 mx-auto'>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2'>
          {myProjects.map((project, index) => (
            <div className='rounded-lg shadow-lg bg-white max-w-sm' key={index}>
              <a href='#!'>
                <img className='rounded-t-lg' src={project.picture} alt='' />
              </a>
              <div className='p-6'>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>
                  {project.projectName}
                </h5>
                <p className='text-gray-700 text-base mb-4'>
                  {project.projectDescription}
                </p>
                <button
                  type='button'
                  className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Button
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
