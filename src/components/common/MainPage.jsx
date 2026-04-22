import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function MainPage() {
  return (
<div className="h-screen w-screen bg-[#f3f3f3] flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-medium text-gray-800 mb-3">Welcome to NSDL</h1>
            <p className="text-gray-600 tracking-wide">Banking made easy - JUST IN A JIFFY</p>
          </div>
        </main>
      </div>
    </div>

  )
}

export default MainPage
