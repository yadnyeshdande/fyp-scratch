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
          {/* Add the rest of the content here */}
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Image
            src={"/"}
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