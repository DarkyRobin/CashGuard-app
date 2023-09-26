import React, { useState } from "react";

const Sidebar = (props) => {
  const { user } = props;

  return (
    <>
      <nav className="flex flex-col w-72 h-full bg-blue-400">
        <div className="w-full flex mx-auto px-6 py-8">
          <div className="w-full h-full flex text-white text-xl">
            Welcome, {user}
          </div>
        </div>
        <div className="w-full flex mx-auto px-6 py-8">
          <ul className="space-y-2">
            <li>
              <a href="#"className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#"className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ml-3">Budget Tracker</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
