import React from "react";
import LogoIcon from "@/components/logoIcon";
const page = () => {
  return (
    <div className="shadow-xs flex flex-col gap-6   rounded-xl w-[350px] overflow-hidden py-6 border border-gray-200 font-inter text-gray-800 relative">
       <div className="absolute w-[350px] h-[350px] top-[-250px] left-0 bg-[radial-gradient(circle_300px_at_50%_50px,#b9f8cf,transparent)]">
       </div>
      <div className="px-6 z-[20] flex justify-start">
        <LogoIcon additionalClass="z-[20] shadow-lg shadow-white" />
      </div>
      <div id="card-header" className="flex flex-col gap-1.5 px-6 z-[20]">
        <span className="leading-none font-semibold">Login</span>
        <span className="text-sm text-[#737373]">
          Enter your credentials to access your account
        </span>
      </div>
      <div id="card-content" className="px-6 ">
        <form action="#" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm leading-none font-medium mb-1"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-200 shadow-xs px-3 py-1 outline-none text-base md:text-sm rounded-md h-9 focus-visible:ring-[3px] focus-visible:ring-gray-400/50 focus-visible:border focus-visible:border-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm leading-none font-medium mb-1"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              className="border border-gray-200 shadow-xs px-3 py-1 outline-none text-base md:text-sm rounded-md h-9 focus-visible:ring-[3px] focus-visible:ring-gray-400/50 focus-visible:border focus-visible:border-gray-400"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="cursor-pointer text-sm font-semibold rounded-xl text-gray-50 outline-none inline-flex items-center justify-center px-6 py-2 h-9 bg-gray-800 hover:bg-gray-800/90  transition-all  hover:shadow-md shadow-xs "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
