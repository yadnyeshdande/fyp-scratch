import React from 'react';
import Image from 'next/image';
// import homeEnvironmentImage from '../../public/home-environment.jpg';

const HomeEnvironmentPage: React.FC = () => {
  return (
    <div className="container mx-auto px-32 py-40">
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">Home Like Environment</h1>
          <p className="text-gray-700 mb-4 md:text-lg">
            At VJTI Hostel, we understand the importance of feeling at home, even when you're away from home. That's why we've created a warm and welcoming environment that fosters a strong sense of community among our residents.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            Beyond your room, our hostel offers a variety of common areas where you can socialize, study, or simply unwind. Our lounges are perfect for catching up with friends, playing games, or watching movies. Our study rooms provide a quiet and conducive environment for focused studying or group work.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            We also organize regular community events and activities to help you connect with your fellow residents and create lasting memories. From movie nights to cultural celebrations, there's always something exciting happening at [Hostel Name].
          </p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Image
            src={"/hc.png"}
            width={500}
            height={500}
            alt="Home Like Environment"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeEnvironmentPage;