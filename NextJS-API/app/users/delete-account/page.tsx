'use client';
import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const DeleteAccountButton: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleDeleteAccount = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.delete('http://localhost:3000/users/delete/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setMessage(response.data.message);
      setError('');
    } catch (error: any) {
      setMessage('');
      setError(error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <button onClick={handleDeleteAccount} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Delete My Account</button>
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default DeleteAccountButton;
