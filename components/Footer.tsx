import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bottom-0 absolute left-0 right-0 bg-[#111]'>
        <div className='p-4 m-auto max-w-[1240px] justify-between items-center flex flex-col md:flex-row '>
            <div>
                <p className='text-[14px] text-white/50'><span>&#169;</span>2023 Johnson Muchiri, All rights reserved</p>
            </div>
            <div>
                <p className="text-[14px] text-white/50">Designed and built with love by Johson Muchiri</p>
            </div>
        </div>
    </div>
  )
}

export default Footer