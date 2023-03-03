'use client';
import {useState} from 'react'
import Link from 'next/link'

import {HiMenu, HiX} from 'react-icons/hi'

const Navbar = () => {

  const [toggleIcon, setToggleIcon] = useState(false);
  
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='w-full z-10'>
        <div className='relative h-full flex items-center justify-between max-w-[1240px] m-auto p-6'>
          <div>
            <h1 className='text-4xl text-green-400'>JM.</h1>
          </div>
          <ul className='hidden md:flex flex-grow space-x-8  items-center justify-center h-full'>
            <li className='active'><Link href='/'>Home</Link></li>
            <li><Link href='/'>About</Link></li>
            <li><Link href='/'>Projects</Link></li>
            <li><Link href='/'>Testimonials</Link></li>
            <li><Link href='/'>Contact Me</Link></li>
          </ul>
          <div className='md:hidden h-full' onClick={() =>setToggleIcon(!toggleIcon)}>
            {toggleIcon ? <HiX size={33} className="cursor-pointer"/> : <HiMenu size={33} className="cursor-pointer"/>
            }
          </div>

          {/* Mobile Menu */}
          {
            <div className={toggleMenu ? "" : ""}>
              <ul className='md:hidden flex flex-grow space-x-8  items-center justify-center h-full '>
                <li className='active'><Link href='/'>Home</Link></li>
                <li><Link href='/'>About</Link></li>
                <li><Link href='/'>Projects</Link></li>
                <li><Link href='/'>Testimonials</Link></li>
                <li><Link href='/'>Contact Me</Link></li>
              </ul>
            </div>
        
          }
        </div>
    </nav>
  )
}

export default Navbar