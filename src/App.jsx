import { useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Dialog from './components/Dialog'
import Footer from './components/Footer'
import Header from './components/Header'
import LoginDialog from './components/LoginDialog'
import { FoodProvider } from './contexts/FoodContext'
import AboutUs from './pages/AboutUs'
import CookingGuide from './pages/CookingGuide'
import Home from './pages/Home'
import RecipeBox from './pages/RecipeBox'
import Recipes from './pages/Recipes'
import WhatToCook from './pages/WhatToCook'

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  const handleLoginClick = () => {
    setIsLoginDialogOpen(true);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoginDialogOpen(false);
  };

  return (
    <Router>
      <FoodProvider>
        <div className="app">
          <Header 
            user={user} 
            onLoginClick={handleLoginClick} 
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whattocook" element={<WhatToCook />} />
            <Route path="/recipes" element={<Recipes user={user} onLoginClick={handleLoginClick} />} />
            <Route path="/ingredients" element={<></>} />
            <Route path="/occasions" element={<></>} />
            <Route path="/guide" element={<CookingGuide/>} />
            <Route 
              path="/about" 
              element={<AboutUs user={user} onLoginClick={handleLoginClick} />} 
            />
            <Route 
              path="/recipe-box" 
              element={user ? <RecipeBox /> : <Navigate to="/" replace />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
          <LoginDialog 
            isOpen={isLoginDialogOpen} 
            onClose={() => setIsLoginDialogOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </div>
      </FoodProvider>
    </Router>
  )
}

export default App