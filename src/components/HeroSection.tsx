// import React from 'react'
// import Image from 'next/image'

// const HeroSection = () => {
//   return (
//     <div
//     className='h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center bg-slate-200 overflow-hidden mx-auto py-10 md:py-10'
//     >
//         <div className='homemain  w-100 sm:  gap-7 pt-12 pb-10 py-10'>
//             <div className='heading font-black font-sans text-7xl flex gap-5 text-white text-stroke text-cyan-indigo-600  text-center mt-5 '>
//                 <h1 className='hover:text-black'>Far</h1> 
//                 <h1 className='hover:text-black'>From</h1>
//                 <h1 className='hover:text-black'>Home</h1> 
//                 <h1 className='hover:text-black'>Another</h1>
//                 <h1 className='hover:text-black'>Home</h1>
//             </div>
//                 <h1 className='text-xl'>In Budget, with high class services.</h1>
//         </div>
//     </div>
//   )
// }
// //UI SHERIYAN.JS TAKAYACHE BAKI AHE 

// export default HeroSection

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-slate-200 overflow-hidden mx-auto py-10 md:py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="homemain w-100 sm:gap-7 pt-12 pb-10 py-10">
          <div className="heading font-black font-sans text-center mt-5 md:text-7xl text-4xl flex flex-col md:flex-row gap-5 text-white text-stroke text-cyan-indigo-600">
            <h1 className="hover:text-black transition-colors duration-300">
              Far
            </h1>
            <h1 className="hover:text-black transition-colors duration-300">
              From
            </h1>
            <h1 className="hover:text-black transition-colors duration-300">
              Home
            </h1>
            <h1 className="hover:text-black transition-colors duration-300">
              Another
            </h1>
            <h1 className="hover:text-black transition-colors duration-300">
              Home
            </h1>
          </div>
          <h1 className="text-xl text-center mt-4">
            In Budget, with high class services.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;