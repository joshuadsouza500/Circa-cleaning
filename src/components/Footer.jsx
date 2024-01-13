import React from 'react'

const Footer = () => {
  return (
    <footer className='my-2  bg-blue-600 text-white '>
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row justify-between">
    <div>
        <h2>Circa Cleaning, Inc.</h2>
        555 Astro Way<br></br>
        Fairfield, New Jersey 12345-5555<br></br>
        Email: <a href="mailto:inquiries@circacleaning.com">Inquires@circacleaning.com</a><br></br>
        Phone: <a href="tel:+15555555555">(555) 555-88888</a>  
    </div>
    
    <div className="flex flex-col sm:gap-2"><p className="text-right">Copyright ©  <span id="year">2024</span> </p>
        <p className="text-right">All Rights Reserved</p>
    </div>
            </section>
    </footer>
  )
}

export default Footer