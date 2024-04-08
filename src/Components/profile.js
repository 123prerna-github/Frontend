import React,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';

function Profile() {
  const [userData,setUserData]=useState({});
  useEffect(()=>{
    fetch("http://localhost:5000/profile",{
      method:"GET",
      headers:{
        Accept:"application.json",
        'Content-Type':'application/json',
        authorization : `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res=>res.json()).then((res2)=>{setUserData(res2?.data)})
  },[]);
  return (
    <div>
      <h1>Profile Page!</h1>
      <h2>Welcome {userData?.firstName} {userData?.lastName}</h2>
      <h3>Email: {userData?.email}</h3>
      <Link to='/login'>Log-Out!!</Link>
    </div>
  );
}

export default Profile;
