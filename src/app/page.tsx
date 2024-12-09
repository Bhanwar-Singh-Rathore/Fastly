



'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import HomeImage from '../../public/Main_image_Home_page (1).png';
import arrowImage from '../../public/arrow.png';
import { Copy } from '@geist-ui/icons';
import { Users } from '@geist-ui/icons';
import Navigation from '@/components/HomeNavigationBar';

function Page() {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "git clone https://github.com/Bhanwar-Singh-Rathore/fastly";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <>
      <Navigation />
      <div className="flex flex-col md:flex-row items-center justify-center mt-11 px-4">
        <div className="md:mr-32 text-center md:text-left">
          <p className="text-3xl md:text-4xl font-bold text-slate-600 mt-12 md:mt-44 font-mono">
            Seamless Control,
            <span className="bg-blue-600 text-white skew-x-[10deg] inline-block px-2 py-1">
              Secure Access
            </span>
          </p>
          <p className="text-3xl md:text-4xl font-bold text-slate-600 mt-2 font-mono">
            Empower Your Roles with Ease
          </p>
          <p className="font-thin font-mono text-lg md:text-2xl mt-6">
            Add, edit, and manage user information with ease
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 mt-8 rounded-lg font-bold hover:bg-blue-600">
            ⚡ Get Started
          </button>
        </div>

        <div className="mt-10 md:mt-20 flex flex-col items-center">
          <p className="text-center bg-gray-600 text-white skew-x-[10deg] inline-block px-2 py-1">
            Technology we use
          </p>
          <Image
            src={arrowImage}
            className="h-16 w-10 md:h-24 md:w-14 mt-2"
            alt="Arrow pointing to technology section"
          />
          <Image
            src={HomeImage}
            alt="Main home page illustration"
            className="mt-2 max-w-full"
          />
        </div>
      </div>

      <div className="ml-4 md:ml-[340px] mt-16 px-4">
        <div className="text-center flex flex-col md:flex-row items-center gap-4">
          <p className="font-thin text-lg md:text-3xl text-gray-500">
            Clone this repo from GitHub
          </p>
          <div className="relative w-full md:w-auto">
            <p className="rounded-lg border h-12 md:w-[640px] border-gray-300 p-4 bg-gray-800 text-blue-500 text-center flex items-center justify-between">
              <span>git clone https://github.com/Bhanwar-Singh-Rathore/fastly</span>
              <span
                onClick={copyToClipboard}
                className="cursor-pointer hover:text-white"
              >
                <Copy />
              </span>
            </p>
            {copySuccess && (
              <span className="absolute -top-6 right-0 text-sm text-green-500">
                Copied!
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 px-4">
        <p className="font-extrabold text-center text-gray-700 text-2xl md:text-4xl font-mono mb-6">
          Empower your team with seamless access control and management.
        </p>
        <p className="font-extrabold text-center text-gray-700 text-lg md:text-xl font-mono">
          Assign roles, manage permissions, and oversee users effortlessly with our intuitive RBAC system.
        </p>
        <p className="font-extrabold text-center text-gray-700 text-lg md:text-xl font-mono">
          Streamline access control while focusing on what truly matters — growing your business.
        </p>
      </div>

      <div className="mt-12 px-4">
        <p className="text-center font-semibold text-2xl md:text-3xl">Features</p>
        <div className="mt-12 mb-12 flex flex-wrap justify-around bg-gray-200 py-4 rounded-md">
          <div className="flex flex-col items-center">
            <p><Users /></p>
            <p>User Management</p>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </p>
            <p>Search Users</p>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </p>
            <p>Analytics</p>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </p>
            <p>Security</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
