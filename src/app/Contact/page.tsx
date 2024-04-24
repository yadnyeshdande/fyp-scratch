// pages/contact.tsx

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-32 py-40">
      <h1 className="text-3xl font-bold mb-6 md:text-4xl">Contact Us</h1>
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl">Get in Touch</h2>
          <p className="text-gray-700 mb-4 md:text-lg">
            We'd love to hear from you! Whether you have questions, feedback, or inquiries, our team is here to assist you. Feel free to reach out to us using the contact form or the provided contact information.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl">Contact Information</h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p className="text-gray-700">H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-gray-700">0123456789</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-gray-700">hostel@vjti.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;