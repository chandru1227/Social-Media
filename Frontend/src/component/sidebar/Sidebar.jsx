import React from 'react';
import { Outlet } from "react-router-dom";
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'; 

const Sidebar = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="bg-[rgb(95,57,151)] w-64 p-6 text-white font-poppins shadow-lg flex flex-col">
                <ul className="w-full space-y-4">
                    <li>
                        <a href="/das" className="flex items-center p-3 hover:bg-[rgb(64,36,106)] rounded-lg transition-all duration-200">
                            <FaTwitter className="mr-3" size={20} />  
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="/das/youtube" className="flex items-center p-3 hover:bg-[rgb(64,36,106)] rounded-lg transition-all duration-200">
                            <FaYoutube className="mr-3" size={20} />  
                            <span>YouTube</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-3 hover:bg-[rgb(64,36,106)] rounded-lg transition-all duration-200">
                            <FaInstagram className="mr-3" size={20} />  
                            <span>Instagram</span>
                        </a>
                    </li>
                </ul>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Sidebar;
