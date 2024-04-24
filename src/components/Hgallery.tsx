import Image from 'next/image';
import React from 'react';


function Hgallery() {
  return (
    <div className='hgallery px-40 h-auto'>

    <div className=" font-bold flex flex-col ">
        <div className="font-black font-sans text-7xl flex  gap-5 text-white text-stroke text-cyan-indigo-600 text-center mt-5">
            <h1 className="text-6xl hover:text-black text-white " >Hosteller's </h1> 
            <h1 className="text-6xl hover:text-black font-sans text-white " > Gallery</h1>
        </div>
        <h3 className=' mx-10 my-8 mt-6'> ✪ Clean rooms with discipline. <br/> ✪ Clean Mess with veg and non-veg meal availble for students. <br /> ✪ Supports Events and Festivals.</h3>
        </div> 
        <div className=' flex flex-row gap-1 mt-4'>
            <Image
            src="/vjtiDroneShot.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}></Image>

            <Image
            src="/vjtiTopView.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}></Image>

            <Image
            src="/quad.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}></Image>

        </div>
        <div className=' flex  flex-row gap-1 mt-4 mb-4 justify-center items-center'>
            <Image
            src="/hostel.png"
            alt="Picture of the author"
            width={500}
            height={500}></Image>

            <Image
            src="/hostelCricket.png"
            alt="Picture of the author"
            width={500}
            height={500}></Image>
          </div>

    </div>
  )
}

export default Hgallery