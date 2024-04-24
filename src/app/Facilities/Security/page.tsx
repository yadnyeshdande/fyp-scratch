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
          <p className="text-gray-700 mb-4 md:text-lg">
            Our hostel is equipped with 24/7 surveillance cameras strategically placed throughout the premises, allowing our security team to monitor and respond to any potential threats or incidents promptly.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            Access to the hostel is strictly controlled, with a secure entry system that requires residents to present their personal hostel ID cards for entry and exit. This ensures that only authorized individuals can enter the premises, providing an added layer of security.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            Our dedicated security personnel are trained professionals who are always on duty, conducting regular patrols and maintaining a vigilant presence. They are readily available to assist you with any security concerns or emergencies that may arise.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg">
            In addition to our physical security measures, we also prioritize the emotional and mental well-being of our residents. Our team is trained to handle sensitive situations with care and discretion, ensuring that you feel supported and protected at all times.
          </p>
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