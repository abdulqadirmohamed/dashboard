import React from "react";
import { Menu } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isopen, setIsopen] = useState(false);

  const handleMenu = () => {
    setIsopen(!isopen);
  };
  return (
    <div className="bg-white p-5 shadow-sm">
      <div className="flex justify-between items-center w-[95%] mx-auto">
        <div>Header</div>
        <div className="flex gap-2 items-center text-gray">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>

          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center p-2 focus:outline-none"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <img
                  className="w-7 h-7 rounded-full cursor-pointer ring-1 hover:ring-blue ring-offset-2 transition-all duration-200"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="UserProfile"
                />
              </button>
            </div>
            {isopen && (
              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  ring-1 ring-blue bg-white ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <Link
                    onClick={handleMenu}
                    to="/Account-setting"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </Link>
                  <hr className="bg-lightGray"/>
                  <Link
                    onClick={handleMenu}
                    to="/logout"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>

          <span>Abdulqadir</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
