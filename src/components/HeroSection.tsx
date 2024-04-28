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

// import React from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <div className="bg-slate-200 overflow-hidden mx-auto py-10 md:py-10">
//       <div className="flex flex-col items-center justify-center">
//         <div className="homemain w-100 sm:gap-7 pt-12 pb-10 py-10">
//           <div className="heading font-black font-sans text-center mt-5 md:text-7xl text-4xl flex flex-col md:flex-row gap-5 text-white text-stroke text-cyan-indigo-600">
//             <h1 className="hover:text-black transition-colors duration-300">
//               Far
//             </h1>
//             <h1 className="hover:text-black transition-colors duration-300">
//               From
//             </h1>
//             <h1 className="hover:text-black transition-colors duration-300">
//               Home
//             </h1>
//             <h1 className="hover:text-black transition-colors duration-300">
//               Another
//             </h1>
//             <h1 className="hover:text-black transition-colors duration-300">
//               Home
//             </h1>
//           </div>
//           <h1 className="text-xl text-center mt-4">
//             In Budget, with high class services.
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Far From Home Another Home</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Hostel Management Made Easy - Streamline your hostel experience with our user-friendly platform. Book accommodations, manage mess services, and access secure entry/exit with your personal hostel ID card.</p>
            <div className="mt-4">
                <Link href={"/"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Sign In
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection