import Link from "next/link";
import React from "react";

export default function ContactCard() {
  return (
    <div>
      <section className="bg-bg py-16 px-8">
  <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
</section>
<div className="bg-bg"><div className=" flex flex-col md:flex-row items-center max-w-screen-xl p-9 md:p-10">
      
      {/* Text Section */}
      <div className="flex-1 p-5 mb-10 md:mb-0 md:pr-12">
        <h1 className="text-4xl md:text-5xl font-medium leading-tight  hover:text-amber-700">
          Discover the Best
        </h1>
        <h1 className="text-4xl mt-2 md:text-5xl font-medium text-blue-950 leading-tight">
          Tech Books for You
        </h1>
        <p className="text-gray-500 mt-11">
          At TechBookStore, we offer a wide range of tech-related books for all
          skill levels. Whether you&#39;re a beginner looking to learn the basics or
          a professional seeking advanced knowledge, we have the right book for
          you.
        </p>
        <p className="text-gray-500 mt-4">
          Join us today to explore our collection and find the perfect resource
          to elevate your tech skills. Sign up now and get exclusive deals!
        </p>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-white p-8 shadow-2xl rounded-sm w-auto max-w-md">
  {/* Name */}
  <div className="mb-4">
    <label className="block mb-2 text-gray-700">Full Name</label>
    <input
      type="text"
      placeholder="Enter your full name"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="block mb-2 text-gray-700">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Subject */}
  <div className="mb-4">
    <label className="block mb-2 text-gray-700">Subject</label>
    <input
      type="text"
      placeholder="Subject"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Message */}
  <div className="mb-4">
    <label className="block mb-2 text-gray-700">Message</label>
    <textarea
      placeholder="Write your message here"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={4}
    ></textarea>
  </div>

  {/* Submit Button */}
  <button className="bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition">
    Submit
  </button>
</div>

    </div>
    </div>
    
    </div>
  
  );
}
