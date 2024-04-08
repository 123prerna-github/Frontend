import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/login';
import RegisterForm from './Components/register';
import Profile from './Components/profile';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  // const toggleForm=()=>{
  //   setIsLogin(!isLogin);
  // }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/login" element={<LoginForm onLogin={setUser} setIsLogin={setIsLogin} />} />
            <Route path="/register" element={<RegisterForm onRegister={setUser} />} />
            {user && (<Route path="/profile" element={<Profile user={user} />} />)}
            <Route
              path="/"
              element={
                isLogin ? (
                  <LoginForm onLogin={setUser} />
                ) : (
                  <RegisterForm onRegister={setUser} />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
