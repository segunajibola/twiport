import React from "react";
import './index.css';

function App() {
  return (
    <div className="">
      <nav className="bg-gray-100 shadow-lg top-0 z-50 w-full fixed">
        <div className="max-w-7xl">
            <div className="flex justify-between text-gray-700">
                <div className="flex items-center py-2 px-0 space-x-7">
                    <a href="#" className="md:ml-10 flex">
                      <img className="w-6 mr-2" src="/favicon-32x32.png" alt="" srcset="" />
                      <span className="font-semibold text-lg">Tailwinder</span>
                    </a>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="relative inline-block text-left">
                        
                    </div>
                </div>
                <div className="flex items-center">
                    <a href="https://github.com/segunajibola/Tailwinder" className="-mr-2">Github <i className="fab fa-github text-xl text-black pr-6"></i></a>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
