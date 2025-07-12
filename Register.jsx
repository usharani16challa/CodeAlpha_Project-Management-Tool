import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registerHandler = async () => {
    await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
    navigate('/');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4 font-bold">Register</h1>
      <input className="border p-2 w-full mb-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={registerHandler} className="bg-green-500 text-white px-4 py-2">Register</button>
    </div>
  );
};

export default Register;