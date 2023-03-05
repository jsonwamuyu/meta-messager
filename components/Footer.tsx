import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full fixed bottom-0 left-0 right-0 bg-[#111] hidden md:block mt-10'>
        <div className='p-4 m-auto max-w-[1240px] justify-between items-center flex flex-col md:flex-row gap-4'>
            <div className='justify-center items-center flex'>
                <p className='text-[14px] text-white/50'>Copyright <span>&#169;</span> 2023 Johnson Muchiri, All rights reserved</p>
            </div>
            <div>
            <ul className='flex  space-x-2  items-center justify-center flex-wrap'>
                <li><Link href='/'  className='text-white/50 text-[14px]'>Home</Link></li>
                <li><Link href='/about'  className='text-white/50 text-[14px]'>About</Link></li>
                <li><Link href='/projects'  className='text-white/50 text-[14px]'>Projects</Link></li>
                <li><Link href='/'  className='text-white/50 text-[14px]'>Testimonials</Link></li>
                <li><Link href='/contact'  className='text-white/50 text-[14px]'>Contact Me</Link></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer