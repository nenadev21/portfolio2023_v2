import React from 'react';

const SectionTitle = ({ children, id }) => {
  return (
    <h1
      id={id && id}
      className='text 3-xl font-bold mb-5 text-purple-600 dark:text-purple-500'
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
