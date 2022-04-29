import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [user, loading, error] = useAuthState();
    let location = useLocation();

    if(loading){
        return <p>loading...</p>
    }
  
    if (!user) {
      
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
};

export default PrivateRoute;