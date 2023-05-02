import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    // const navigate = useNavigate()
    const location = useLocation()

    if(loading){
        return 
    }

    if(user) {
        return children
    }
    return <Navigate state={{from : location}}  to="/login" replace></Navigate>
};

export default PrivetRoute;