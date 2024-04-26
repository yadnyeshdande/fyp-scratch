import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div
    className='h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center bg-slate-200 overflow-hidden mx-auto py-10 md:py-10'
    >
        <div className='homemain  w-100   gap-7 pt-12 pb-10 py-10'>
            <div className='heading font-black font-sans text-7xl flex gap-5 text-white text-stroke text-cyan-indigo-600  text-center mt-5 '>
                <h1 className='hover:text-black'>Far</h1> 
                <h1 className='hover:text-black'>From</h1>
                <h1 className='hover:text-black'>Home</h1> 
                <h1 className='hover:text-black'>Another</h1>
                <h1 className='hover:text-black'>Home</h1>
            </div>
                <h1 className='text-xl'>In Budget, with high class services.</h1>
        </div>
    </div>
  )
}
//UI SHERIYAN.JS TAKAYACHE BAKI AHE 

export default HeroSection