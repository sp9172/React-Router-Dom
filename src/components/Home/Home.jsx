import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <aside className="relative overflow-hidden bg-gray-50 text-black rounded-lg sm:mx-16 mx-2 py-16 sm:py-24">
        <div className="relative z-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8">
            {/* Text Content */}
            <div className="space-y-8 text-center sm:text-left">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Download Now
                <span className="block text-orange-700 mt-2">Lorem Ipsum</span>
              </h2>

              <Link
                className="inline-flex items-center px-6 py-3 font-medium bg-orange-700 text-white rounded-lg hover:bg-orange-600 transition"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                Download now
              </Link>
            </div>

            {/* Image */}
            <div className="relative flex justify-center sm:justify-end">
              <img
                className="w-80 sm:w-96 object-contain"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Additional Image Section */}
      <div className="grid place-items-center mt-16 sm:mt-20">
        <img
          className="w-48 sm:w-96 object-contain"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="Secondary Image"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-semibold">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
