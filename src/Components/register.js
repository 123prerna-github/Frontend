import React, { useState } from 'react';

import {useNavigate,Link} from 'react-router-dom';

function RegisterForm({ onRegister }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  const onRegisteruser=(userData)=>{                               //userData is an object 
       fetch("http://localhost:5000/register",{
      method:"POST",
      body:JSON.stringify(userData),
      headers:{
        Accept:"application.json",
        'Content-Type':'application/json'
      }
    })
    .then((res)=>res.json())
    .then((res2)=>{
      alert(res2.message);
      if(res2?.success){
        navigate("/login");
      }
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisteruser({  firstName, lastName, email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button  type="Submit">Register</button>
        <p>"Already have an account !"</p>
        <Link to="/login">Login Here!</Link>
      </form>
    </div>
  );
}

export default RegisterForm;