// import Image from 'next/image';
// import React from 'react';


// function Hgallery() {
//   return (
//     <div className='hgallery px-40 h-auto'>

//     <div className=" font-bold flex flex-col ">
//         <div className="font-black font-sans text-7xl flex  gap-5 text-white text-stroke text-cyan-indigo-600 text-center mt-5">
//             <h1 className="text-6xl hover:text-black text-white " >Hosteller's </h1> 
//             <h1 className="text-6xl hover:text-black font-sans text-white " > Gallery</h1>
//         </div>
//         <h3 className=' mx-10 my-8 mt-6'> ✪ Clean rooms with discipline. <br/> ✪ Clean Mess with veg and non-veg meal availble for students. <br /> ✪ Supports Events and Festivals.</h3>
//         </div> 
//         <div className=' flex flex-row gap-1 mt-4'>
//             <Image
//             src="/vjtiDroneShot.jpeg"
//             alt="Picture of the author"
//             width={500}
//             height={500}></Image>

//             <Image
//             src="/vjtiTopView.jpeg"
//             alt="Picture of the author"
//             width={500}
//             height={500}></Image>

//             <Image
//             src="/quad.jpeg"
//             alt="Picture of the author"
//             width={500}
//             height={500}></Image>

//         </div>
//         <div className=' flex  flex-row gap-1 mt-4 mb-4 justify-center items-center'>
//             <Image
//             src="/hostel.png"
//             alt="Picture of the author"
//             width={500}
//             height={500}></Image>

//             <Image
//             src="/hostelCricket.png"
//             alt="Picture of the author"
//             width={500}
//             height={500}></Image>
//           </div>

//     </div>
//   )
// }

// export default Hgallery


import Image from 'next/image';
import React from 'react';

function Hgallery() {
  return (
    <div className="hgallery px-4 py-8 md:px-40">
      <div className="font-bold flex flex-col items-center">
        <div className="font-black font-sans text-4xl md:text-7xl flex gap-5 text-white text-stroke text-cyan-indigo-600 text-center mt-5">
          <h1 className="text-4xl md:text-6xl hover:text-orange-400  text-white transition-colors duration-300">
            Hosteller's
          </h1>
          <h1 className="text-4xl md:text-6xl hover:text-orange-400  font-sans text-white transition-colors duration-300">
            Gallery
          </h1>
        </div>
        <h3 className="mx-4 md:mx-10 my-8 mt-6 text-center text-gray-700">
          ✪ Clean rooms with discipline. <br /> ✪ Clean Mess with veg and non-veg meal availble for students. <br /> ✪
          Supports Events and Festivals.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fade-in">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/vjtiDroneShot.jpeg"
            alt="VJTI Drone Shot"
            width={500}
            height={500}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/vjtiTopView.jpeg"
            alt="VJTI Top View"
            width={500}
            height={500}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/quad.jpeg"
            alt="Quad"
            width={500}
            height={500}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-4 animate-fade-in">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/hostel.png"
            alt="Hostel"
            width={500}
            height={500}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/hostelCricket.png"
            alt="Hostel Cricket"
            width={500}
            height={500}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Hgallery;