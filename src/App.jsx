/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import authService from './service/authService.js'
import { useDispatch } from 'react-redux'
import { authLoginContext, authLogoutContext } from './context/authSlice.js'

function App() {
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=> {
    try {
      authService.getCurrentUser().then((userData) => {
        if (userData) {
          dispatch(authLoginContext(userData))
        } else{
          console.log("user not logged in");
          dispatch(authLogoutContext())
        }
      }).finally(()=> setLoader(false))
    } catch (error) {
      console.log(error?.message);
    }
  }, [dispatch])


  return (
    <>
    {/* <h1 className="text-3xl font-bold underline flex h-screen w-full items-center justify-center">
      Hello world!
    </h1> */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
