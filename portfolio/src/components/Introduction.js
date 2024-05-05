import React from 'react';
import heroDevices from '../assets/Icons/hero-devices.svg'

const Introduction = () => {
  return (
    <>
    <section>
    <div className='hero-body'> 
    <div className='container'>
      <div className='flex justify-center flex-col px-9 pt-9'>
        <div className='p-6'>
        <h1 className='p-3'>
          Designer, Frontend Developer & Mentor
        </h1>
        <h2 className='p-3'>
          I design and code beautifully simple things, and I love what I do.
        </h2>
        </div>
        <img src={heroDevices} alt='' />
      </div>
    </div>
    </div>
    </section>
    <section className='px-9 py-32 bg-red-600 '>
      <div className='m-auto container  text-white'>
        <div>
      <h1 className='p-3'>
        Hi, I'm Angad, Nice to meet you.
      </h1>
      <h2 className='p-3'>
      Since beginning my journey as a frontend developer 2 years ago, I've done work for client to create responsive web applications, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.
      </h2>
      </div>
      </div>
    </section>
    </>
  );
}

export default Introduction;