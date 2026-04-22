import React from 'react'
import LoginPage from './components/common/LoginPage'
import ForgotPasswordPage from './components/common/ForgotPasswordPage'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import MainPage from './components/common/MainPage'
import UserRequestPage from './components/common/UserRequestPage'


function FinalApp() {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
  // <MainPage />
  // <UserRequestPage />
  )
}

export default FinalApp