import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
<div className="flex flex-col justify-center min-h-screen bg-gray-100 dark:bg-zinc-900 sm:py-12">
  <div className="p-10 mx-auto xs:p-0 md:w-full md:max-w-md">
        <div className="w-full bg-white divide-y divide-gray-200 rounded-lg shadow dark:bg-zinc-800 ">
      <div className="px-5 py-7">
        <label className="block pb-1 text-sm font-semibold text-gray-600 dark:text-white">
          E-mail
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
        />
        <label className="block pb-1 text-sm font-semibold text-gray-600 dark:text-white ">
          Password
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
        />
        <label className="block pb-1 text-sm font-semibold text-gray-600 dark:text-white ">
          Confirm Password
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
        />
        <button
          type="button"
          className="transition duration-200 bg-accent1 focus:shadow-sm focus:ring-4 focus:bg-[#83f781] hover:bg-[#83f781] focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          <span className="inline-block mr-2">Sign Up</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block w-4 h-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
      <div className="py-5">
        <div className="">
          <div className="text-center sm:text-left whitespace-nowrap">
            <div className="px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 cursor-pointer dark:text-white ">
              
              <span className="inline-block ml-1">Already have an account? 
                <button className='ml-2 text-accent1'> <NavLink to={'/'}>SignIn</NavLink> </button> 
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5">
      <div className="grid grid-cols-2 gap-1">
        <div className="text-center sm:text-left whitespace-nowrap">
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default SignUp