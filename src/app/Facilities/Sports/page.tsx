import React from 'react';
import Image from 'next/image';
// import sportsFacilitiesImage from '../../public/sports-facilities.jpg';

const SportsFacilitiesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-32 py-40">
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">Access to Different Sports Facilities, Gyms, and Grounds/Courts</h1>
          <p className="text-gray-700 mb-4 md:text-lg">
            At VJTI Hostel, we believe in promoting a healthy and active lifestyle for our residents. That's why we offer access to a wide range of sports facilities, gyms, and grounds/courts, ensuring that you have ample opportunities to engage in physical activities and stay fit.
          </p>
          {/* Add the rest of the content here */}
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Image
            src={"/"}
            width={500}
            height={500}
            alt="Sports Facilities"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SportsFacilitiesPage;