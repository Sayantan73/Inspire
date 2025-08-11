import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Provider} from 'react-redux'
import store from './context/store.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProtectedLayout from './components/ProtectedLayout.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([{
  path : "/",
  element : <App />,
  children : [
    {
      element : <ProtectedLayout authentication={true} />,
      children : [
        {
          path : "/",
          element : <Home />
        }
      ]
    },
    {
      element : <ProtectedLayout authentication={false} />,
      children : [
        {
          path : "/login",
          element : <Login />
        }
      ]
    },
    {
      element : <ProtectedLayout authentication={false} />,
      children : [
        {
          path : "/signup",
          element : <Signup />
        }
      ]
    },
  ]
}])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
