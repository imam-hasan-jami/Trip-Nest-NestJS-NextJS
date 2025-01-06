'use client';
import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const AddAdminPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found');
      }

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.post('http://localhost:3000/users/add-admin', {
        name,
        email,
        password,
      }, { headers });
      setMessage('New admin added successfully.');
    } catch (error: any) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md bg-blue shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">Add New Admin</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">Add Admin</button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default AddAdminPage;
