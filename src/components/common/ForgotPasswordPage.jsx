import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import bankLogo from '../../assets/bank.png';
import watermark from '../../assets/nsdl_watermark.png';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen w-full bg-white font-sans overflow-hidden">
      
      {/* LEFT SECTION: Static Branding & Square Watermark */}
      <div className="hidden lg:flex w-[55%] flex-col items-center justify-center bg-[#F8F9FA] relative border-r border-gray-100">
        
        {/* Main Bank Logo - Static */}
        <div className="z-20 p-10">
          <img 
            src={bankLogo} 
            alt="NSDL Bank Illustration" 
            className="max-w-md h-auto drop-shadow-sm" 
          />
        </div>

        {/* WATERMARK: Square Box centered exactly in the left panel */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 border border-gray-200/40 flex items-center justify-center bg-white/40 rounded-sm">
            <img 
              src={watermark} 
              alt="" 
              className="w-full h-full object-contain opacity-20 p-6" 
            />
          </div>
        </div>

        {/* Branding Footer */}
      </div>

      {/* RIGHT SECTION: Forgot Password Form */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          
          {/* Header Area */}
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Forgot Password</h1>
            <p className="text-gray-500 mt-3 text-lg">
              Lost your password? No worries. Enter your Mobile
            Number, and we'll help you reset it.
            </p>
          </div>

          <ForgotPasswordForm />

          {/* Back to Login Footer */}
          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
            <button className="text-gray-500 text-sm font-medium hover:text-[#8b0305] transition-colors flex items-center justify-center w-full gap-2">
             
             <Link 
        to="/login" 
        className="text-[#8b0305] font-bold hover:underline underline-offset-4"
      >
        <span>←</span> Back to Login
      </Link>
              

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;