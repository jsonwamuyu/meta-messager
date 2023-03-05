import React from 'react'

const ContactMe = () => {
  return (
    <section className="w-full">
      <div className='p-4 max-w-[1240px] m-auto mt-20'>
        <h2 className='text-center md:text-start text-5xl'>Contact Me</h2>
        <p className="text-white/60 text-center md:text-start">Feel free to reach me anytime and I will get back to you ASAP!</p>
        <div className='flex flex-col gap-8 md:flex-row w-full  justify-between'>
          <div>
            <h5>Social icons</h5>
          </div>
          <div>
            <form action="" className='flex flex-col'>
              <div className='flex flex-col md:flex-row gap-4'>
                  <input type="text" className='my-2 bg-transparent outline-none border px-4 py-1 border-white/40' placeholder='Full Names'/>
                  <input type="text" className='my-2 bg-transparent outline-none border border-white/40 px-4 py-1' placeholder='Your Email ' />
              </div>
              <textarea name="message" id="" cols={40} rows={5} className='my-6 border border-white/40 outline-none bg-transparent px-4 py-1' placeholder='Write a Message'/>
              <button className='px-4 py-1 bg-green-400 hover:opacity-80 duration-300 ease-in active:scale-95'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe