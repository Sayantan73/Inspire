import React, { useState } from 'react';
import authService from '../service/authService.js';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  console.log("from Login component");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.createAccount(formData);
      console.log('Signup successful:', response);
      // Handle successful signup (e.g., redirect, show success message)
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup error (e.g., show error message)
    }

  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              autoComplete="name"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              autoComplete="email"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              autoComplete="current-password"
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

