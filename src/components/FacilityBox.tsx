'use client';
import Link from 'next/link';
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa6';

function FacilityBox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8 md:px-0">
      <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105">
        <BackgroundGradient className="rounded-t-lg">
          <Image
            src={'/basketball.jpg'}
            alt="Home Like Environment"
            height="400"
            width="400"
            className="object-cover w-full h-64"
          />
        </BackgroundGradient>
        <div className="p-6 bg-white dark:bg-zinc-900">
          <p className="text-lg font-semibold text-black mb-2 dark:text-neutral-200">
            Home Like Environment
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            At VJTI Hostel, we understand the importance of feeling at home, even when you're away from home. That's why we've created a warm and welcoming environment that fosters a strong sense of community among our residents.
          </p>
          <Link href={'/Facilities/HomeLikeEnv'}>
            <button className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black hover:bg-zinc-800 transition-colors duration-300">
              <span>Learn More</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <FaLocationArrow />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105">
        <BackgroundGradient className="rounded-t-lg">
          <Image
            src={'/basketball.jpg'}
            alt="Security"
            height="400"
            width="400"
            className="object-cover w-full h-64"
          />
        </BackgroundGradient>
        <div className="p-6 bg-white dark:bg-zinc-900">
          <p className="text-lg font-semibold text-black mb-2 dark:text-neutral-200">
            Security
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            At VJTI Hostel, we prioritize the safety and security of our residents above all else. That's why we've implemented a comprehensive security system to ensure that you feel safe and protected at all times. Our hostel is equipped with 24/7 surveillance cameras.
          </p>
          <Link href={'/Facilities/Security'}>
            <button className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black hover:bg-zinc-800 transition-colors duration-300">
              <span>Learn More</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <FaLocationArrow />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105">
        <BackgroundGradient className="rounded-t-lg">
          <Image
            src={'/basketball.jpg'}
            alt="Sports Facilities"
            height="400"
            width="400"
            className="object-cover w-full h-64"
          />
        </BackgroundGradient>
        <div className="p-6 bg-white dark:bg-zinc-900">
          <p className="text-lg font-semibold text-black mb-2 dark:text-neutral-200">
            Access to Different Sports Facilities
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            At VJTI Hostel, we believe in promoting a healthy and active lifestyle for our residents. That's why we offer access to a wide range of sports facilities, gyms, and grounds/courts, ensuring that you have ample opportunities to engage in physical activities and stay fit.
          </p>
          <Link href={'/Facilities/Sports'}>
            <button className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black hover:bg-zinc-800 transition-colors duration-300">
              <span>Learn More</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                <FaLocationArrow />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FacilityBox;


// 'use client';
// import Link from 'next/link'
// import React from 'react'
// import { BackgroundGradient } from './ui/background-gradient'
// import Image from 'next/image';
// import { FaLocationArrow } from "react-icons/fa6";


// function FacilityBox() {
//   return (
//     <div className=' flex grid-flow-row sm: grid-cols-1 md:grid-cols-2 justify-center gap-3 mb-4'>

//         <div>
//             <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
//                 <Image
//                 src={'/basketball.jpg'}
//                 alt="jordans"
//                 height="400"
//                 width="400"
//                 className="object-contain"
//                 />
//                 <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//                 Home Like Environment
//                 </p>
        
//                 <p className="text-sm text-neutral-600 dark:text-neutral-400">
//                 At VJTI Hostel, we understand the importance of feeling at home,
//                 even when you're away from home. That's why we've created a warm and
//                 welcoming environment that fosters a strong sense of community among our residents.
//                 </p>
//                 <Link href={'/Facilities/HomeLikeEnv'}>
//                     <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
//                     <span>Learn More </span>
//                     <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
//                         <FaLocationArrow />
//                     </span>
//                     </button>
//                 </Link>
//             </BackgroundGradient>
//         </div>

//         <div>
//             <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
//                 <Image
//                 src={'/basketball.jpg'}
//                 alt="jordans"
//                 height="400"
//                 width="400"
//                 className="object-contain"
//                 />
//                 <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//                 Security
//                 </p>
        
//                 <p className="text-sm text-neutral-600 dark:text-neutral-400">
//                 At VJTI Hostel, we prioritize the safety and security of our residents  
//                 above all else. That's why we've implemented a comprehensive
//                 security system to ensure that you feel safe and protected at all times. 
//                 Our hostel is equipped with 24/7 surveillance cameras
//                 </p>
//                  <Link href={'/Facilities/Security'}>
//                     <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
//                     <span>Learn More</span>
//                     <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
//                         <FaLocationArrow />
//                     </span>
//                     </button>
//                 </Link>               
//             </BackgroundGradient>
//         </div>

//         <div>
//             <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
//                 <Image
//                 src={'/basketball.jpg'}
//                 alt="jordans"
//                 height="400"
//                 width="400"
//                 className="object-contain"
//                 />
//                 <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//                 Access to Different Sports Facilities
//                 </p>
        
//                 <p className="text-sm text-neutral-600 dark:text-neutral-400">
//                 At VJTI Hostel, we prioritize the safety and security of our residents
//                 above all else. That's why we've implemented a comprehensive
//                 security system to ensure that you feel safe and protected at all times.
//                 </p>
//                  <Link href={'/Facilities/Sports'}>
//                     <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
//                     <span>Learn More</span>
//                     <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
//                         <FaLocationArrow />
//                     </span>
//                     </button>
//                 </Link>               
//             </BackgroundGradient>
//         </div>
//     </div>
//   )
// }

// export default FacilityBox


