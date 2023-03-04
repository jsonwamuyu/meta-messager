import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {BsEye, BsGithub} from 'react-icons/bs'

const Projects = () => {
  return (
    <section className='w-full'>
        <div className='max-w-[1240px] p-4 m-auto mt-20'>
            <h3 className='text-5xl text-center md:text-start'>Projects</h3>
            <p className='text-white/60 py-3 text-center md:text-start md:max-w-[500px]'>These are some of the projects that I have worked on and I take pride in</p>
            <div className='flex flex-col md:flex-row gap-8 flex-wrap'>
                <div className='flex flex-col space-y-4 w-auto md:w-[350px] bg-[#111] rounded-md  shadow-md'>
                    <Image src='/projects/about02.png' alt='' className='rounded-t-md h-[100]' width={350} height={100}/>
                    <h2 className='text-2xl px-4'>Photography Portifolio App</h2>
                    <p className='text-white/60 px-4'>A photography portifolio app buit with Nextjs and Tailwindcss</p>
                    <div className='flex flex-row justify-between px-4'>
                        <Link href="#" className='items-center flex justify-center px-6 py-2  text-[14px] space-x-2 bg-green-400'><p>Live</p> <BsEye/></Link>
                        <Link href="https://github.com/jsonwamuyu/photograpthy_next_app"  className='px-6 py-2 flex justify-center items-center space-x-2'><p>Github</p> <BsGithub/></Link>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 w-auto md:w-[350px] bg-[#111] rounded-md  shadow-md'>
                    <Image src='/projects/about03.png' alt='' className='rounded-t-md' width={350} height={100}/>
                    <h2 className='text-2xl px-4'>LaslesVPN App</h2>
                    <p className='text-white/60 px-4'>A VPN service provider web app built with Nextjs, Tailwindcss and Typescript</p>
                    <div className='flex flex-row justify-between px-4'>
                        <Link href="" className='items-center flex justify-center px-6 py-2  text-[14px] space-x-2 bg-green-400'><p>Live</p> <BsEye/></Link>
                        <Link href="https://github.com/jsonwamuyu/LaslesVPN_app"  className='px-6 py-2 flex justify-center items-center space-x-2'><p>Github</p> <BsGithub/></Link>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 w-auto md:w-[350px] bg-[#111] rounded-md  shadow-md'>
                    <Image src='/projects/about04.png' alt='' className='rounded-t-md' width={350} height={100}/>
                    <h2 className='text-2xl px-4'>Portifolio Sample App</h2>
                    <p className='text-white/60 px-4'>A portifolio web app built with typescript tailwind and nextjs13</p>
                    <div className='flex flex-row justify-between px-4'>
                        <Link href="#" className='items-center flex justify-center px-6 py-2  text-[14px] space-x-2 bg-green-400'><p>Live</p> <BsEye/></Link>
                        <Link href="https://github.com/jsonwamuyu/portifolio_sample"  className='px-6 py-2 flex justify-center items-center space-x-2'><p>Github</p> <BsGithub/></Link>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 w-auto md:w-[350px] bg-[#111] rounded-md  shadow-md'>
                    <Image src='/projects/about01.png' alt='' className='rounded-t-md' width={350} height={100}/>
                    <h2 className='text-2xl px-4'>Photography Portifolio App</h2>
                    <p className='text-white/60 px-4'> A start up web app created with nextjs and tailwindcss</p>
                    <div className='flex flex-row justify-between px-4'>
                        <Link href="#" className='items-center flex justify-center px-6 py-2  text-[14px] space-x-2 bg-green-400'><p>Live</p> <BsEye/></Link>
                        <Link href="https://github.com/jsonwamuyu/startupone"  className='px-6 py-2 flex justify-center items-center space-x-2'><p>Github</p> <BsGithub/></Link>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 w-auto md:w-[350px] bg-[#111] rounded-md  shadow-md'>
                    <Image src='/projects/about01.png' alt='' className='rounded-t-md' width={350} height={100}/>
                    <h2 className='text-2xl px-4'>Manage Landing Page App</h2>
                    <p className='text-white/60 px-4'>A landing page created with React and Tailwindcss</p>
                    <div className='flex flex-row justify-between px-4'>
                        <Link href="/" className='items-center flex justify-center px-6 py-2  text-[14px] space-x-2 bg-green-400'><p>Live</p> <BsEye/></Link>
                        <Link href="https://github.com/jsonwamuyu/manage-landing-page"  className='px-6 py-2 flex justify-center items-center space-x-2'><p>Github</p> <BsGithub/></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects