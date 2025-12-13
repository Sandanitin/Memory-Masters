import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Debug: Log backend URL configuration
console.log('🔧 Backend URL:', import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001');
console.log('🔧 All ENV vars:', import.meta.env);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
