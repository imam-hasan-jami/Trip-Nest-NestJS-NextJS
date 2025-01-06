'use client';
import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const UpdateUserPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3000/users/update/${userId}`, {
        name,
        password,
      });
      setMessage('Update successful');
    } catch (error: any) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="max-w-md w-full p-6 bg-blue rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Update User Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block mb-1">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">New Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Update</button>
        </form>
        {message && <p className={`mt-4 ${message === 'Update successful' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
      </div>
    </div>
  );
};

export default UpdateUserPage;
