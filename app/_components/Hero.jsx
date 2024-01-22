import React from 'react';
import Constants from '../_utils/Constants';

const Hero = () => {
  return (
    <>
      <section className='bg-gray-50'>
        <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex  '>
          <div className='mx-auto max-w-xl text-center'>
            <h1 className='text-3xl font-extrabold sm:text-5xl'>
              <span className='text-primary'>Upload, save</span> and easily{' '}
              <span className='text-primary'>Share </span> your files in one
              place
            </h1>

            <p className='mt-4 sm:text-xl/relaxed text-gray-500'>
              {Constants.desc}
            </p>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <a
                className='block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'
                href='/get-started'
              >
                Get Started
              </a>

              <a
                className='block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow transition duration-150 ease-in-out hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto'
                href='/about'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
