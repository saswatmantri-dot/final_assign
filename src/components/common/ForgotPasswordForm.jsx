import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    dob: '', // Often required for bank resets
    txnId: "" // Maintained as string per your Java POJO requirement
  });

  const handleResetRequest = (e) => {
    e.preventDefault();
    
    // Constructing the reset payload
    const resetPayload = {
      ...formData,
      tnxType: "OFF-US", // Business constraint
      requestType: "PWD_RESET_INIT"
    };
    
    console.log("Initiating Reset Sequence:", resetPayload);
  };

  return (
    <form onSubmit={handleResetRequest} className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-400 tracking-widest">Mobile Number</label>
        <input 
          type="text"
          required
          placeholder="Please enter your Mobile Number"
          className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#8b0305] outline-none transition-all duration-200"
          onChange={(e) => setFormData({...formData, userId: e.target.value})}
        />
      </div>


      <button 
        type="submit"
        className="w-full bg-[#8b0305] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-red-900 active:scale-[0.98] transition-all duration-200 mt-4 uppercase tracking-wider"
      >
        Continue
      </button>

    </form>
  );
};

export default ForgotPasswordForm;