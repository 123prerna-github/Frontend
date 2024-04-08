import React, { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';

function LoginForm({ onLogin,setIsLogin }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (userData) => {
        fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          Accept:"application.json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
      })
      .then((res)=>res.json())
      .then((res2)=>{
        alert(res2.message);
        if(res2?.succsess){
          localStorage.setItem('token',res2?.accessToken);
          navigate("/profile");
        }
      });
      onLogin(userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({username,password});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} required /> 
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button  type="Submit">Login</button>
      <p>"Don't have an account ?"</p>
      <Link to="/register">Register Here!</Link>
    </form>
  );
}

export default LoginForm;
