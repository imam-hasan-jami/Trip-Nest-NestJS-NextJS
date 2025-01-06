'use client';
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter
import 'tailwindcss/tailwind.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/signin', {
        email,
        password,
      });
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      localStorage.setItem('accessToken', accessToken);
      setMessage('Signed in successfully!');
      router.push('/home-page'); // Redirect to home page
    } catch (error) {
      setMessage('Sign in failed. Please check your credentials.');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    setAccessToken('');
    setMessage('Signed out successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="max-w-md w-full p-6 bg-blue rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
        <div className="max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          {<button onClick={handleSignIn} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Sign In</button>}
          {accessToken && <button onClick={handleSignOut} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 ml-2">Sign Out</button>}
        </div>
        {message && <p className="mt-4">{message}</p>}
        {accessToken && (
          <div className="mt-4">
            
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
