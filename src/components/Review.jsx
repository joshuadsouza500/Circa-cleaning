import React from 'react'

const Review = () => {
  return (
    <section className='flex flex-col items-center mx-6 gap-10 scroll-mt-20' id='Review'>
         <h1 className='text-5xl font-bold text-center pb-3'>Our Reviews</h1>
        <div className='py-8 px-8 bg-blue-600 rounded-3xl max-w-sm sm:max-w-full sm:mx-30 mx-10'>
          <p className='text-2xl sm:text-4xl font-sans max-w-5xl text-white py-8 my-2 text-left '> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
                <p className="italic text-lg sm:text-xl text-right mt-2 text-[#AF7E67]">
                    —Steve Robin
                </p>
        </div>

        <div className='py-8 px-8 bg-blue-600 rounded-3xl max-w-sm sm:max-w-full sm:mx-30 mx-10'>
         <p className='text-2xl sm:text-4xl font-sans max-w-5xl text-white py-8 my-2 text-left '> Lorem ipsum dolor sit amet, consectetur adipiscing eit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
                <p className="italic text-lg sm:text-xl text-right mt-2 text-slate-200">
                    —Harry George
                </p>
        </div>
        <div className='py-8 px-8 bg-blue-600 rounded-3xl max-w-sm sm:max-w-full sm:mx-30 mx-10'>
        <p className='text-2xl sm:text-4xl font-sans max-w-5xl text-white py-8 my-2 text-left '> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
                <p className="italic text-lg sm:text-xl text-right mt-2 text-slate-200">
                    —Daniel M.
                </p>
        </div>
        <hr className='bg-black mx-auto w-1/2 my-10'></hr>
    </section>
  )
}

export default Review
