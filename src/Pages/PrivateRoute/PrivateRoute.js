import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    
    if(user?.email){
        return children
    }
    else{
        return <Navigate to="/register" state={{from: location}}/>
    }
    
};

export default PrivateRoute;