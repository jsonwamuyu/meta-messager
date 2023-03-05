import React from 'react'

import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full'>
        <div className='max-w-[1240px] p-4 m-auto flex flex-col-reverse md:flex-row justify-center md:gap-10 gap-8 items-center mt-20'>
        <div className='relative flex flex-col text-center md:text-start'>
          <div className='absolute -left-16 -top-10 md:-left-24 md:-top-16 opacity-10 w-[200px] rounded-full h-[200px] bg-gradient-to-r from-green-300/70 via-gray-400/80 to-white/20'/>
            <h1 className='text-5xl md:max-w-xs lg:max-w-md'>Johnson muchiri</h1>
            <h5 className='text-3xl py-3  text-white/60'>Software Engineer</h5>
        </div>
        <div>
            <Image className='rounded-full' src='/lovely.png' height={350} width={350} alt="profile"/>
        </div>
        </div>
    </section>
  )
}

export default Hero;