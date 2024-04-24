import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Logout: React.FC = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        navigate('/', { replace: true }); 
    };

    useEffect(() => {
        setTimeout(() => {
            handleLogout();
             
        }, 1000); 
    }, []);


    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
}

export default Logout;