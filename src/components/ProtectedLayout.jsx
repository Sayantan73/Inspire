import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Await, Outlet, useNavigate } from 'react-router-dom'

const ProtectedLayout = ({authentication=true}) => {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);
    console.log("authStatus :", authStatus);
    

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        }else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }else{
            setLoader(false);
        }
    }, [authStatus, authentication, navigate]);

  return !loader ?  <Outlet /> :  <h1>Loading...</h1> 
}

export default ProtectedLayout
