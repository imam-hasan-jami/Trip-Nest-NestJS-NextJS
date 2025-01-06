'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import 'tailwindcss/tailwind.css';

const NavigationPage = () => {
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    router.push('http://localhost:3001');
  };

  return (
    <div className="container">
      <h1 className="title">Home Page</h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/users/profile">
            <div className="nav-link">Profile</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users/view-all-users">
            <div className="nav-link">View All Users</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users/update-users">
            <div className="nav-link">Update User</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users/search-user">
            <div className="nav-link">Search User</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users/delete-user">
            <div className="nav-link">Delete User</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users/delete-account">
            <div className="nav-link">Delete Account</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users/add-admin">
            <div className="nav-link">Add New Admin</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/deposit-money">
            <div className="nav-link">Deposit Money</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/payment">
            <div className="nav-link">Make Payment</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/transaction-history">
            <div className="nav-link">Transaction History</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <div className="nav-link">About Us</div>
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={handleSignOut} className="nav-link">Sign Out</button>
        </li>
      </ul>
      
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .title {
          text-align: center;
          margin-bottom: 20px;
        }
        .nav-list {
          list-style: none;
          padding: 0;
        }
        .nav-item {
          margin-bottom: 10px;
        }
        .nav-link {
          cursor: pointer;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          padding: 10px;
          border-radius: 4px;
          background-color: #f0f0f0;
        }
        .nav-link:hover {
          color: #007bff;
          background-color: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default NavigationPage;
