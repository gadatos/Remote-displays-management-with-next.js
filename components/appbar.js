import React from 'react';
import Link from 'next/link';
function AppBar() {
  const monitor = [1, 2, 3, 4, 5];

  return (
    <nav class="z-0 relative" x-data="{open:false,menu:false, lokasi:false}">
      <div class="relative z-10 bg-blue-300 shadow">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex items-center px-2 lg:px-0">
              <a class="flex-shrink-0" href="#" />
              <span className="text-black text-2xl  mr-5 font-mono ">
                Remote display management
              </span>

              <div class="hidden lg:block lg:ml-2">
                <div class="flex">
                  <Link
                    href="/"
                    className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-mono text-gray-800  hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    {' '}
                    Strona Główna{' '}
                  </Link>
                  {monitor.map((e) => {
                    return (
                      <button
                        key={e}
                        type="button"
                        onClick={() => {
                          window.open(`/display/${e}`);
                        }}
                        className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-mono text-gray-800  hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                      >
                        {' '}
                        Monitor {e}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
