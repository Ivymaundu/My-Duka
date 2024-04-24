import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Register: React.FC = () => {
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');


    const handleRegister = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/register', {
                username, password
            });
            console.log('Registration successful:', response.data);
            <Navigate to="/dashboard" />
            

        } catch (error) {
            console.error('Input correct format:', error);
        }
    };

    return (
        <div className='container'>
            <h2>Register an account with us</h2>

            <form className='login-form' onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username"
                        value={username} onChange={(e) => setUsername(e.target.value)} placeholder="input username"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password..." />
                </div>
                {/* <a href="/register" style={{textDecoration:'none'}}>Don't have an account? Create one</a>  */}
                <button type='submit'>Create Account</button>


            </form>


        </div>
    );
}

export default Register;