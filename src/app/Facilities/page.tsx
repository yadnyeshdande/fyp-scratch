import Link from 'next/link'
import React from 'react'

const Facilities = () => {
  return (
    <div className='facilities   '>
        <div className='fheading  px-10vw py-10vw px-60 py-40 flex-auto items-center justify-center text-center'>
            <h1 className='text-6xl' >Facilities</h1>
            <h3 className='text-3xl font-black font-sans text-white text-stroke text-stroke-cyan-600' >
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. <br/> Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
            </h3>
        </div>
        <div className='fimages width-full px-60 py-10 border-spacing-2 border-red-300 bg-slate-500 h-screen mt-3.5 flex justify-between '>
            
            <div className='fleft w-5/12 h-full border-1px-solid-blue overflow-auto'>
              <div className="fleftelm w-full h-full flex flex-col justify-center">
                  <h1 className='text-3xl font-bold m-2'>Security</h1>
                  <h3 className='text-2xl'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
                  <Link href={"/Facilities/Security"}> <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'> Learn More </button> </Link>
              </div>
              <div className="fleftelm w-full h-full flex flex-col justify-center">
                  <h1 className='text-3xl font-bold m-2'>Home Like Environment</h1>
                  <h3 className='text-2xl'>Blue bottle vinegar polaroid, listicle craft beer next level umami narwhal cold-pressed. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard. </h3>
                  <Link href={"/Facilities/HomeLikeEnv"}> <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'> Learn More </button> </Link>
              </div>
              <div className="fleftelm w-full h-full flex flex-col justify-center">
                  <h1 className='text-3xl font-bold m-2'>Sports</h1>
                  <h3 className='text-2xl'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
                  <Link href={"/Facilities/Sports"}> <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'> Learn More </button> </Link>
              </div>
            </div>
            
            <div className='fright  h-full flex items-center justify-end'>
              <div className='images w-11/12 h-full flex bg-zinc-950 items-start'></div>
            </div>
            {/* <div className='fright  h-full flex items-center justify-end'>
              <div className='images w-11/12 h-full flex bg-white items-start'></div>
            </div> */}
        </div>
    </div>
  )
}
//text stroke cyan/white je vatale te thev
export default Facilities