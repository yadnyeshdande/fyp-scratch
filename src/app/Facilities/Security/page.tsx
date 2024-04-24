import React from 'react';
import Image from 'next/image';
// import highSecurityImage from '../../public/high-security.jpg';

const HighSecurityPage: React.FC = () => {
  return (
    <div className="container mx-auto px-32 py-40">
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">High Security</h1>
          <p className="text-gray-700 mb-4 md:text-lg">
            At VJTI Hostel, we prioritize the safety and security of our residents above all else. That's why we've implemented a comprehensive security system to ensure that you feel safe and protected at all times.
          </p>
          {/* Add the rest of the content here */}
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Image
            src={"/"}
            width={500}
            height={500}
            alt="High Security"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HighSecurityPage;