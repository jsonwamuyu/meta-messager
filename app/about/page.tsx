import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-full'>
      <div className='max-w-[1240px] p-4 m-auto flex flex-col md:flex-row gap-10 justify-center mt-20'>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-5xl pb-2'>About me</h2>
          <p className='md:max-w-md'>I am passionate about transforming any web design into its equivalent web app.</p>
          <p className='md:max-w-md text-white/70'>For the past 4 years I have been working with both personal and teams projects implementing different web technologies.</p>
          <p className='text-green-400'>I am open to any web frontend job or internship offer</p>
        </div>
        <div className='flex flex-col space-y-4'>
          <h5 className='text-4xl pb-2'>My Web Stack</h5>
          <div className='flex items-center flex-wrap gap-4 md:max-w-[400px]'>
            <div><Image src='/techs/react.png' alt='react' height={50} width={50}/></div>
            <div><Image src='/techs/typescript.png' alt='next' height={50} width={50}/></div>
            <div><Image src='/techs/javascript.png' alt='javascript' height={50} width={50}/></div>
            <div><Image src='/techs/typescript.png' alt='typescript' height={50} width={50}/></div>
            <div><Image src='/techs/python.png' alt='tailwindcss' height={50} width={50}/></div>

            <div><Image src='/techs/python.png' alt='python' height={50} width={50}/></div>
            <div><Image src='/techs/figma.png' alt='figma' height={50} width={50}/></div>

            <div><Image src='/techs/sass.png' alt='sass' height={50} width={50}/></div>
            <div><Image src='/techs/git.png' alt='git' height={50} width={50}/></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About