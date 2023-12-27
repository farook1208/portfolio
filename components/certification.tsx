// components/StaticImage.js
import React from 'react';

const Certification = () => {
  return (
    <div className=''>
    <h1 className='text-center border-l-indigo-50 text-3xl p-4 pb-10 font-bold'>Certification Hub</h1>

<div className='flex h-80 w-90 pb-4 pt-6 justify-center'>
   
      <img src="/mern.jpg" alt="Image" />
      <img src='/Internship.jpg' alt='image2' />

    </div>
    <div className='justify-center  '>
    <img src='/Cert.png' alt='image3'/>
    </div>
    </div>
    
    
  );
};

export default Certification;
