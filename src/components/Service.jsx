import React from 'react'

import commercial from '../assets/commercial.png'
import janitor from '../assets/janitor.png'
import card3 from '../assets/card3.png'
import CardComponent from './Cards'

const Service = () => {
  return (
    <div className='scroll-mt-20 my-5' id='Service'>
      <h1 className='text-5xl font-bold text-center pb-3'>Our Services</h1>
    <div className='flex flex-col sm:flex-row justify-center p-5 gap-5 ' >
      <CardComponent img = {janitor} title = "Residential cleaning"/>
      <CardComponent img = {commercial} title ="Commercial cleaning"/>
      <CardComponent img = {card3} title ="Deep cleaning"/>
      
    </div>
    <hr className='bg-black mx-auto w-1/2 my-20'></hr>
    </div>
  )
}
export default Service