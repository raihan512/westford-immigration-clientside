import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext/AuthContext";


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthProvider);
    const location = useLocation()

    if (loading) {
        return <p>Loading...</p>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;
