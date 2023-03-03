import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full'>
        <div className='max-w-[1224px] mx-auto h-full flex items-center justify-between'>
          <div></div>
          <ul className='flex items-center justify-center space-x-6'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/'>About</Link></li>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/'>Home</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar