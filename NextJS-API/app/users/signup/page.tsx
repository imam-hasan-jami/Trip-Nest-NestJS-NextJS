'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter
import 'tailwindcss/tailwind.css';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/signup', {
        name,
        email,
        password,
      });
      console.log('Response data:', response.data);
      if (response.status === 200) {
        setSuccessMessage("You've successfully signed up.");
        router.push('/users/signin'); // Redirect to '/users/signin'
      }
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  const handleSignIn = () => {
    router.push('/users/signin'); // Redirect to '/users/signin'
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="max-w-md w-full p-6 bg-blue rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="max-w-md">
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
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Sign Up</button>
          {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
        <button onClick={handleSignIn} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signup;
