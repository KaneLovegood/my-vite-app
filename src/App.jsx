import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Dialog from './components/Dialog'
import LoginDialog from './components/LoginDialog'
import RecipeBox from './components/RecipeBox'
import AboutUs from './components/AboutUs'
import Recipes from './components/Recipes'

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
      <div className="app">
        <Header 
          user={user} 
          onLoginClick={handleLoginClick} 
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes user={user} onLoginClick={handleLoginClick} />} />
          <Route path="/ingredients" element={<></>} />
          <Route path="/occasions" element={<></>} />
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
    </Router>
  )
}

export default App