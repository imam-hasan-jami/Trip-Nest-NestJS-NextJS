'use client';
import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}

const SingleUserPage: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(`http://localhost:3000/users/single/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(response.data);
      setError('');
    } catch (error: any) {
      setUser(null);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="max-w-md w-full p-6 bg-blue rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-center">Search User</h1>
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
        <button onClick={handleSearch} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">Search</button>
        {error && <p className="mt-4 text-red-600">{error}</p>}
        {user && (
          <div className="mt-4">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Roles:</strong> {user.roles.join(', ')}</p>
            <p><strong>Created At:</strong> {user.createdAt}</p>
            <p><strong>Updated At:</strong> {user.updatedAt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleUserPage;
