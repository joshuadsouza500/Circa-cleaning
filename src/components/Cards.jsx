import React from 'react'


const CardComponent = (props) => {
  return (
   
    <div className=' flex flex-col cursor-pointer justify-center p-2 gap-5 my-2 *:max-w-sm bg-white shadow-sm rounded-lg  hover:shadow-md ' >
        <div className='flex justify-center items-center p-1'>
          <img src={props.img} className='w-1/2 bg-white'/>
       </div>
       <div>
          <h3 className='text-center text-slate-900 font-bold text-2xl'>{props.title}</h3>
          <p className='max-w-md text-center text-slate-500 text-sm py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
       </div>
      
    </div>
    
  )
}

export default CardComponent