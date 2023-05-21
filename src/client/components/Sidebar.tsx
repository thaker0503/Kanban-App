import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* create a modern ui sidebar using tailwind css */}
      <div className="h-screen flex flex-col flex-shrink-0 w-64 bg-gray-800">
        <div className="flex flex-col items-center flex-shrink-0 bg-gray-800">
          <div className="flex items-center justify-between h-5 w-full m-4 p-12">
            {/* <img
              className="h-20 w-full p-4"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            /> */}
            <span className="text-white text-2xl font-bold">Kanban</span>
            <span className="text-white text-2xl font-bold">Board</span>
          </div>
          <div className="flex flex-col w-full">
            {/* <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-current text-gray-400 group-hover:text-gray-300"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4ZM5 4H19V20H5V4Z"
                />
                <path
                  className="fill-current text-gray-400 group-hover:text-gray-300"
                  d="M13 13H7V11H13V13ZM17 7H7V9H17V7Z"
                />
              </svg>
              Dashboard
            </a> */}
            <a
              href="#"
              className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                className="text-gray-300 mr-3 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-current text-gray-400 group-hover:text-gray-300"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4ZM5 4H19V20H5V4Z"
                />
                <path
                  className="fill-current text-gray-400 group-hover:text-gray-300"
                  d="M13 13H7V11H13V13ZM17 7H7V9H17V7Z"
                />
              </svg>
              Home
            </a>
          </div>
          {/* <div className="mt-auto pt-10">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1612833603922-3b9d5a3b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwZ3JvdXAlMjBzdGF0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div className="mt-1 text-sm font-medium leading-none text-gray-400">
                  <a href="#" className="hover:text-white">
                    View profile
                  </a>
                  <span className="text-gray-500 mx-1">|</span>
                  <a href="#" className="hover:text-white">
                    Settings
                  </a>
                  <span className="text-gray-500 mx-1">|</span>
                  <a href="#" className="hover:text-white">
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Sign out
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
