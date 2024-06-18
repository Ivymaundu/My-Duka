import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';

const GoogleLoginAuth: React.FC = () => {
    const navigate = useNavigate();

    const handleSuccess = (credentialResponse: CredentialResponse) => {
        console.log('Login Success:', credentialResponse);
        // Redirect to the dashboard after successful login
        navigate('/dashboard');
    };

    const handleError = () => {
        console.log('Login Failed');
        // Handle the error response here
    };

    return (
        <GoogleOAuthProvider clientId="73430386540-5s8h1ng2t8qp4qfpa3n73vrs3p0mkldi.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginAuth;
