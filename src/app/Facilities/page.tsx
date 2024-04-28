// import FacilityBox from '@/components/FacilityBox'
// import Link from 'next/link'
// import React from 'react'

// const Facilities = () => {
//   return (
//     <div className='facilities   '>
//         <div className='fheading  px-10vw py-10vw px-60 py-40 flex-auto items-center justify-center text-center'>
//             <h1 className='text-6xl' >Facilities</h1>
//             <p className="text-gray-700 mb-4 md:text-lg">
//               At VJTI Hostel, we understand the importance of feeling at home, even when you're away from home. That's why we've created a warm and welcoming environment that fosters a strong sense of community among our residents.
//             </p>
//             <p className="text-gray-700 mb-4 md:text-lg">
//               At VJTI Hostel, we prioritize the safety and security of our residents above all else. That's why we've implemented a comprehensive security system to ensure that you feel safe and protected at all times.
//             </p>
//             <p className="text-gray-700 mb-4 md:text-lg">
//               At VJTI Hostel, we believe in promoting a healthy and active lifestyle for our residents. That's why we offer access to a wide range of sports facilities, gyms, and grounds/courts, ensuring that you have ample opportunities to engage in physical activities and stay fit.
//             </p>
//         </div>
//         <FacilityBox />
//         <div className='fimages width-full px-60 py-10 border-spacing-2 border-red-300 bg-slate-500 h-screen mt-3.5 flex justify-between '>
            
//             <div className='fleft w-5/12 h-full border-1px-solid-blue overflow-auto'>
//               <div className="fleftelm w-full h-full flex flex-col justify-center">
//                   <h1 className='text-3xl font-bold m-2'>Security</h1>
//                   <h3 className='text-2xl'>At VJTI Hostel, we prioritize the safety and security of our residents above all else. That's why we've implemented a comprehensive security system to ensure that you feel safe and protected at all times.</h3>
//                   <Link href={"/Facilities/Security"}> <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'> Learn More </button> </Link>
//               </div>
//               <div className="fleftelm w-full h-full flex flex-col justify-center">
//                   <h1 className='text-3xl font-bold m-2'>Home Like Environment</h1>
//                   <h3 className='text-2xl'>At VJTI Hostel, we understand the importance of feeling at home, even when you're away from home. That's why we've created a warm and welcoming environment that fosters a strong sense of community among our residents.</h3>
//                   <Link href={"/Facilities/HomeLikeEnv"}> <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'> Learn More </button> </Link>
//               </div>
//               <div className="fleftelm w-full h-full flex flex-col justify-center">
//                   <h1 className='text-3xl font-bold m-2'>Sports</h1>
//                   <h3 className='text-2xl'>At VJTI Hostel, we believe in promoting a healthy and active lifestyle for our residents. That's why we offer access to a wide range of sports facilities, gyms, and grounds/courts, ensuring that you have ample opportunities to engage in physical activities and stay fit.</h3>
//                   <Link href={"/Facilities/Sports"}> <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'> Learn More </button> </Link>
//               </div>
//             </div>
            
//             <div className='fright  h-full flex items-center justify-end'>
//               <div className='images w-11/12 h-full flex bg-zinc-950 items-start'></div>
//             </div>
//             <div className='fright  h-full flex items-center justify-end'>
//               <div className='images w-11/12 h-full flex bg-white items-start'></div>
//             </div>
//         </div>
//     </div>
//   )
// }
// //text stroke cyan/white je vatale te thev
// export default Facilities


import FacilityBox from '@/components/FacilityBox';
import Link from 'next/link';
import React from 'react';

const Facilities = () => {
  return (
    <div className="facilities min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <div className="fheading px-4 py-8 md:px-10vw md:py-10vw flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:mt-20 text-white text-stroke-thin text-stroke-amber-400">Facilities</h1>
        <p className="text-gray-400 mb-4 md:text-lg">
          At VJTI Hostel, we understand the importance of feeling at home, even when you're away from home. That's why we've created a warm and welcoming environment that fosters a strong sense of community among our residents.
        </p>
        <p className="text-gray-400 mb-4 md:text-lg">
          At VJTI Hostel, we prioritize the safety and security of our residents above all else. That's why we've implemented a comprehensive security system to ensure that you feel safe and protected at all times.
        </p>
        <p className="text-gray-400 mb-4 md:text-lg">
          At VJTI Hostel, we believe in promoting a healthy and active lifestyle for our residents. That's why we offer access to a wide range of sports facilities, gyms, and grounds/courts, ensuring that you have ample opportunities to engage in physical activities and stay fit.
        </p>
      </div>
      <FacilityBox />
    </div>
  );
};

export default Facilities;