'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  roles: string[];
  accountBalance: number;
}

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:3000/users/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserProfile(response.data);
      } catch (error: any) {
        setError(error.response.data.error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="max-w-md w-full p-6 bg-blue rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          userProfile && (
            <div>
              <p>ID: {userProfile.id}</p>
              <p>Name: {userProfile.name}</p>
              <p>Email: {userProfile.email}</p>
              <p>Role: {userProfile.roles.join(', ')}</p>
              <p>Account Balance: {userProfile.accountBalance}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
