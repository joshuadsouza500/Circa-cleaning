

const About = () => {
  return (
    <section id='About' >
      <h2 className='text-5xl text-center font-bold py-5 my-3'>About Us</h2>
      <div className='flex flex-col-reverse sm:flex-row justify-center items-center gap-8'>
      <p className='text-2xl text-slate-800 m-2 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <img className=' w-1/2 sm:w-1/3 ' src='/src/assets/aboutus.png' alt='about us image'></img>
     </div>
     <hr className='bg-black mx-auto w-1/2 my-20'></hr>
    </section>

  )
}

export default About