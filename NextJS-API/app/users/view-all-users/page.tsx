'use client';
import React, { useState, useEffect } from 'react';
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

const AllUsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:3000/users/all', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUsers(response.data);
      } catch (error: any) {
        setError(error.response.data.error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="max-w-screen-xl w-full p-6 bg-blue rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-center">All Users</h1>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">ID</th>
                  <th className="border border-gray-400 px-4 py-2">Name</th>
                  <th className="border border-gray-400 px-4 py-2">Email</th>
                  <th className="border border-gray-400 px-4 py-2">Roles</th>
                  <th className="border border-gray-400 px-4 py-2">Created At</th>
                  <th className="border border-gray-400 px-4 py-2">Updated At</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className={index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}>
                    <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.roles.join(', ')}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.createdAt}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsersPage;
