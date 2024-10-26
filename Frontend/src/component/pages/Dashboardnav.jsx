import React from 'react'

const Dashboardnav= () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
                <div className="text-2xl font-semibold text-primary">Dashboard</div>
                <div className="relative">
                    <input type="text" placeholder="Search" className="border rounded-lg pl-10 py-2 w-80" />
                    <span className="absolute left-3 top-2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M9.8 14.6a5.6 5.6 0 1 1 0-11.2 5.6 5.6 0 0 1 0 11.2z"></path>
                        </svg>
                    </span>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="text-gray-400 hover:text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 0 18 14.6V10a6 6 0 1 0-12 0v4.6c0 .524-.214 1.028-.595 1.405L4 17h5m5 0v2a3 3 0 0 1-6 0v-2m6 0H9"></path>
                        </svg>
                    </button>
                    <div className="flex items-center space-x-3">
                        <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <p className="text-gray-dark font-semibold">Elon Musk</p>
                            {/* <p className="text-sm text-gray-400">Admin</p> */}
                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Dashboardnav