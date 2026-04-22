import React from 'react';
import LoginForm from './LoginForm';
import bankLogo from '../../assets/bank.png';
import watermark from '../../assets/nsdl_watermark.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full bg-white font-sans overflow-hidden">
      
      {/* LEFT SECTION: Branding & Imagery */}
      <div className="hidden lg:flex w-[55%] flex-col items-center justify-center bg-[#F8F9FA] relative border-r border-gray-100">
        
        {/* Main bank logo/illustration - Static & Centered */}
        <div className="z-20 p-10">
          <img 
            src={bankLogo} 
            alt="NSDL Bank Illustration" 
            className="max-w-md h-auto drop-shadow-md" 
          />
        </div>

        {/* WATERMARK: Square Box centered in the section */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 border border-gray-200/50 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden">
            <img 
              src={watermark} 
              alt="" 
              className="w-full h-full object-contain opacity-20 p-4" 
            />
          </div>
        </div>
      </div>

      {/* RIGHT SECTION: The Login Form */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          
          {/* Mobile-only static logo */}
          <div className="lg:hidden flex justify-center mb-6">
            <img src={bankLogo} alt="Logo" className="h-16" />
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Login</h1>
            <p className="text-gray-500 mt-3 text-lg">
              Please enter your details
            </p>
          </div>

          <LoginForm />

          <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center text-sm">
              <button className="text-[#8b0305] font-bold hover:text-red-800 transition underline-offset-4 hover:underline">
                <Link 
        to="/forgot-password" 
        className="text-[#8b0305] font-bold hover:underline underline-offset-4"
      >
        Forgot Password?
      </Link>
              </button>
              <button className="text-[#8b0305] font-bold hover:text-red-800 transition underline-offset-4 hover:underline">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;