import React from 'react'

const Contact = () => {
  return (
    <section className='scroll-mt-20' id='Contact'>
         <h1 className='text-5xl font-bold text-center pb-3'>Contact Us</h1>
        <form action='' className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4 p-2'>
            <label htmlFor="Subject" className='font-semibold' >Subject</label>
            <input type="text" id="subject" name="subject" required=""  placeholder="Your subject" className="w-full text-black text-2xl sm:text-3xl padding-3 rounded-xl border border-solid border-slate-900 " ></input>
            <label htmlFor="message" className='font-semibold'>Message</label> 
               <textarea required="" placeholder="Enter text here" name="message" id="message" cols="30" rows="10" className="w-full text-black text-2xl sm:text-3xl padding-3 rounded-xl border border-solid border-slate-900"></textarea>
               <button className="bg-blue-600 hover:bg-blue-600 active:bg-blue-500 text-white p-3 w-48 rounded-xl border border-solid">Submit</button>
        </form>
            
    </section>
  )
}

export default Contact