import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLoginContext } from '../context/authSlice.js';
import authService from '../service/authService.js';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  console.log("from Login component");


  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.logIn(formData);
      console.log("response :", response);
      
      if (response.success) {
        console.log('Login successful');
        // Save the access token in session storage or cookies
        sessionStorage.setItem('accessToken', response?.data?.accessToken);
        console.log("accessToken :", response?.data?.accessToken);
        
        const userData = response?.data
        console.log("userData :", userData); 
        
        if (userData) dispatch(authLoginContext(userData))
        
        // Handle successful login (e.g., redirect, show success message)
        navigate("/")
        console.log("response", response);

      } else {
        console.error('Login failed:', response.message);
        // Handle login error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error
    }

    

  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
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
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 mt-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

