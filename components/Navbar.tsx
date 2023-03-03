'use client';
import {useState} from 'react'
import Link from 'next/link'

import {HiMenu, HiX} from 'react-icons/hi'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  return (
    <nav className='w-full z-10 '>
        <div className='h-full flex items-center justify-between max-w-[1240px] m-auto p-6'>
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
          <div className='md:hidden h-full' onClick={handleToggle}>
            {toggle ? <HiX size={33} className="cursor-pointer"/> : <HiMenu size={33} className="cursor-pointer"/>
            }
          </div>

          {/* Mobile Menu */}
          <div className={toggle ? 'z-50 absolute flex justify-center items-center w-full md:hidden bg-black/90 text-white top-[5rem] left-0 bottom-0 text-center ease-in duration-300'
                : 'z-50 absolute flex justify-center items-center w-full md:hidden bg-black/90 text-white top-[5rem] left-[-100%] bottom-0 text-center ease-in duration-300'}>
                <ul className='flex flex-col space-y-8'>
                    <li onClick={handleToggle}><Link className='text-4xl' href='/'>Home</Link></li>
                    <li onClick={handleToggle}><Link className='text-4xl' href='#gallery'>About</Link></li>
                    <li onClick={handleToggle}><Link className='text-4xl ' href='/work'>Projects</Link></li>
                    <li onClick={handleToggle}><Link className='text-4xl ' href='/contact'>Testimonials</Link></li>
                    <li onClick={handleToggle}><Link className='text-4xl ' href='/contact'>Contact Me</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar