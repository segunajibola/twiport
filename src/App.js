import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <div className="">
      <nav className="bg-gray-100 shadow-lg top-0 z-50 w-full fixed">
        <div className="max-w-full">
            <div className="flex justify-between text-gray-700">
                <div className="flex items-center py-2 px-0 space-x-7">
                    <a href="#" className="md:ml-10 flex">
                      <img className="w-6 mr-2" src="/favicon-32x32.png" alt=""/>
                      <span className="font-semibold text-lg">Twiport</span>
                    </a>
                </div>
                {/* <div className="flex items-center space-x-1">
                    <div className="relative inline-block text-left">
                        
                    </div>
                </div> */}
                <div className="flex">
                    <a href="https://github.com/segunajibola/twiport" className="-mr-2 items-end">Github <i className="fab fa-github text-xl text-black pr-6"></i></a>
                </div>
            </div>
        </div>
      </nav>

      {/* Start of header */}
      <div className='grid bg-gray-100 mt-16 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2'>
          <div className='max-w-xl'>
            <h1 className='mt-2 text-2xl font-bold text-blue-500 dark:text-white sm:mt-4 sm:text-4xl lg:mt-4 lg:text-3xl xl:text-7xl'>
            Build Your Twitter Portfolio
            <FontAwesomeIcon icon={faTwitter} className='ml-2'/>
            </h1>
            <p className='mt-2 text-gray-600 dark:text-white sm:text-xl'>
              All your important moments in Twitter on one page.
            </p>
            <img
              src='https://blush.design/api/download?shareUri=xmeDB2yJZeYzHPIC&c=Hair_0%7Ee7b460-0.4%7E372310_Skin_0%7Ef4d4b8-0.4%7Ec3986a&w=800&h=800&fm=png'
              alt='twitter portfolio'
              className='my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 lg:hidden'
            />
            <div className='mt-4 space-x-1 sm:mt-6'>
              <a
                href='/'
                className='focus:outline-none inline-block transform rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-blue-600 dark:bg-blue-600  sm:text-base'
              >
                Start building
              </a>
              <a
                href='/'
                className='focus:outline-none inline-block rounded-lg bg-gray-200 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-blue-500 hover:text-white hover:bg-gray-400 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base'
              >
                About
              </a>
            </div>
          </div>
        </div>

        <div className='relative m-3 hidden lg:block 2xl:col-span-3'>
          <img
            src='https://blush.design/api/download?shareUri=xmeDB2yJZeYzHPIC&c=Hair_0%7Ee7b460-0.4%7E372310_Skin_0%7Ef4d4b8-0.4%7Ec3986a&w=800&h=800&fm=png'
            alt=''
            className='absolute inset-0 h-full w-full rounded'
          />
        </div>
      </div>
      {/* End of header */}

      <div className='bg-grey-300 '>
        <div>

        </div>
      </div>

    </div>
  );
}

export default App;
