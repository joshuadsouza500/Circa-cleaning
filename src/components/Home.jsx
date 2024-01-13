import React from 'react'


const Home = () => {
  return (
    <div className='scroll-mt-20' id="Home"> 
        <section className= "flex sm:flex-row p-6 justify-center items-center flex-col-reverse gap-9 ">
          <div>
            <h2 className=" text-center font-extrabold text-6xl sm:text-left max-w-md text-slate-900 mt-2  md:pt-7">
            Refresh <span className='text-blue-600'>your</span> space</h2>
          <p className='m-2 text-2xl max-w-md text-center sm:text-left py-8 text-slate-700'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
          <img className="w-1/2 sm:w-1/4 pt-2 " src='./src/assets/cleaner.png'/>
        </section>
        <hr className='bg-black mx-auto w-1/2 my-20'></hr>
      
    </div>
  )
}

export default Home