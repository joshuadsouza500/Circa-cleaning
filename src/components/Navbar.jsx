
import React, {useState} from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {

  const [menu,setMenu]= useState(false);

  const handleClick = ()=>{
  setMenu(!menu)
  };

  return (
    <div className='w-full sticky top-0 border-0 '>
        <div className="bg-blue-600 flex p-4 justify-around items-center mx-auto">
        <div>
           <h2 className="text-white font-semibold text-2xl">Circa Cleaning</h2>
        </div>
        <div>
        <button onClick={handleClick} id="hamburger-button" className="text-3xl md:hidden cursor-pointer">☰</button>
          <nav className="text-white text-xl space-x-6 hidden md:block cursor-pointer">
           <Link to='Home' spy={true} smooth={true} duration={500} className='hover:opacity-90 ' > Home</Link> 
           <Link to='About' spy={true}  smooth={true} duration={500} className='hover:opacity-90 ' > About Us</Link> 
           <Link to='Service' spy={true} smooth={true} duration={500} className='hover:opacity-90' > Our Services</Link> 
           <Link to='Review' spy={true}  smooth={true} duration={500} className='hover:opacity-90' > Reviews</Link> 
           <Link to='Contact' spy={true}  smooth={true} duration={500}  className='hover:opacity-90'> Contact Us</Link> 
         

          </nav>
          
        </div>
        </div>

        <div id="mobileMenu" className={`${ 
          menu ? "translate-y-0" : "-translate-y-full"} absolute bg-slate-900 flex flex-col justify-center w-full top-0 transition-transform duration-500 `}>
            <button className="text-5xl cursor-pointer text-white p-8 text-end" onClick={handleClick}> X </button>
        <nav onClick={handleClick} className="text-white text-4xl font-semibold flex flex-col justify-start gap-9 items-center min-h-screen">
        <Link to='Home' spy={true} smooth={true} duration={200} onClick={handleClick} className='hover:opacity-90 w-full text-center' > Home</Link> 
           <Link to='About' spy={true}  smooth={true} duration={200} onClick={handleClick} className='hover:opacity-90 w-full text-center' > About Us</Link> 
           <Link to='Service' spy={true} smooth={true} duration={200} onClick={handleClick} className='hover:opacity-90 w-full text-center' > Our Services</Link> 
           <Link to='Review' spy={true}  smooth={true} duration={200} onClick={handleClick} className='hover:opacity-90 w-full text-center' > Reviews</Link> 
           <Link to='Contact' spy={true}  smooth={true} duration={200} onClick={handleClick}  className='hover:opacity-90 w-full text-center'> Contact Us</Link> 
          </nav>

        </div> 
    </div>
  )
}

export default Navbar
