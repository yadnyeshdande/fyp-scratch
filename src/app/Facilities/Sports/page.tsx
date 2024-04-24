import React from 'react';
import Image from 'next/image';

const SportsFacilitiesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-32 py-40">
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">Access to Different Sports Facilities, Gyms, and Grounds/Courts</h1>
          <p className="text-gray-700 mb-4 md:text-lg">
            At VJTI Hostel, we believe in promoting a healthy and active lifestyle for our residents. That's why we offer access to a wide range of sports facilities, gyms, and grounds/courts, ensuring that you have ample opportunities to engage in physical activities and stay fit.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            Our on-site gymnasium is equipped with state-of-the-art exercise equipment, including treadmills, exercise bikes, weight machines, and free weights. Whether you're looking to build strength, improve cardiovascular health, or simply maintain an active lifestyle, our gym has everything you need.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            For those who love outdoor sports, we have dedicated grounds and courts for various activities. Our basketball and tennis courts are well-maintained and perfect for practicing your skills or engaging in friendly matches with your fellow residents.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            If you're a fan of team sports, our multipurpose field can accommodate a variety of games, including soccer, cricket, and more. You can join our sports clubs or organize your own games with friends, fostering a sense of community and camaraderie.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            In addition to these facilities, we also offer group fitness classes led by experienced instructors. From yoga and Zumba to kickboxing and dance, there's something for everyone to enjoy.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            At VJTI Hostel, we believe that a healthy mind resides in a healthy body. By providing access to these sports facilities, gyms, and grounds/courts, we aim to promote a balanced lifestyle that nurtures both your physical and mental well-being.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <Image
            src={"/cricketGround.png"}
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