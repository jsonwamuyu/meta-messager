import React from 'react'

import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full'>
        <div className='max-w-[1240px] p-4 m-auto flex flex-col-reverse md:flex-row justify-between items-center mt-20'>
        <div className='flex flex-col text-center md:text-start'>
            <h1 className='text-5xl md:max-w-xs lg:max-w-md'>Johnson muchiri</h1>
            <h5 className='text-3xl py-3'>Software Engineer</h5>
        </div>
        <div>
            <Image className='rounded-full' src='/lovely.png' height={40} width={400} alt="profile"/>
        </div>
        </div>
    </section>
  )
}

export default Hero;