// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     txnId: "" 
//   });

//   const handleLogin = (e) => {
//     e.preventDefault();
    
  
//     const authRequest = {
//       ...formData,
//       tnxType: "OFF-US", // Enforced constant
//       requestTime: Date.now()
//     };
    
//     console.log("Transmitting to Backend:", authRequest);
//   };

//   return (
//     <form onSubmit={handleLogin} className="space-y-6">
//       <div className="space-y-2">
//         <label className="text-sm font-bold text-gray-600 tracking-tight">User ID</label>
//         <input 
//           type="text"
//           required
//           placeholder="Username*"
//           className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#8b0305] focus:ring-0 outline-none transition-all"
//           onChange={(e) => setFormData({...formData, username: e.target.value})}
//         />
//       </div>

//       <div className="space-y-2">
//         <label className="text-sm font-bold text-gray-600 tracking-tight">Password</label>
//         <input 
//           type="password"
//           required
//           placeholder="Password*"
//           className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#8b0305] focus:ring-0 outline-none transition-all"
//           onChange={(e) => setFormData({...formData, password: e.target.value})}
//         />
//       </div>

//       <button 
//         type="submit"
//         className="w-full bg-[#8b0305] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-red-900 active:scale-[0.99] transition-all duration-200 mt-4"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the hook

const LoginForm = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    txnId: "" 
  });

  const handleLogin = (e) => {
    e.preventDefault();
    
    const authRequest = {
      ...formData,
      tnxType: "OFF-US", // Enforced constant
      requestTime: Date.now()
    };
    
    console.log("Transmitting to Backend:", authRequest);

    // 3. Trigger the redirect after your logic completes.
    // Replace '/main' with the actual path you defined for MainPage in your Router.
    navigate('/main'); 
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-600 tracking-tight">User ID</label>
        <input 
          type="text"
          required
          placeholder="Username*"
          className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#8b0305] focus:ring-0 outline-none transition-all"
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-600 tracking-tight">Password</label>
        <input 
          type="password"
          required
          placeholder="Password*"
          className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#8b0305] focus:ring-0 outline-none transition-all"
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-[#8b0305] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-red-900 active:scale-[0.99] transition-all duration-200 mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;