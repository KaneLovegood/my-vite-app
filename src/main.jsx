import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MainProvider } from './context/MainContext'
import './index.css'
import { CookProvider } from './context/CookContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
      <CookProvider>
      <App />
      </CookProvider>
    </MainProvider>
    
  </React.StrictMode>,
)
