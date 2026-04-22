import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FinalApp from './FinalApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>   
     <FinalApp />
  </StrictMode>,
)
