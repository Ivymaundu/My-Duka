import '../style/login.css'
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export default function RegisterUser() {
    const[full_name, setFull_name] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const[role,setRole] = useState<string>('');
    const[password,setPassword]= useState<string>('');
    const [company_id, setCompany_id] = useState<number>(0);

    const formData = {
        company_id,
        email,
        full_name,
        role,
        password
    };
    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }
        try {
            const response = await axios.post('http://104.248.192.12:5005/register_user', formData);
            console.log('Registration successful:', response.data);
            <Navigate to="/login" />
        } catch (error) {
            console.error('Input correct format:', error);
        }
    };
    return (
        <div className="body">
            <div className="container">
                <form onSubmit={handleRegister}>
                    <h1>Create User Account</h1>
                    <div className="form-group">
                        <label htmlFor="">Full Name</label>
                        <input type="text" name="business_name" className="form-control" required
                            value={full_name} onChange={(e) => setFull_name(e.target.value)} placeholder="Full name..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email Adress</label>
                        <input type="email" name="email" className="form-control" required
                            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Company Unique ID</label>
                        <input type="number" name="company_id" className="form-control" required
                            value={company_id} onChange={(e) => setCompany_id(Number(e.target.value))} placeholder="Company Id..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Role</label>
                        <input type="text" name="role" className="form-control" required
                            value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" className="form-control" required
                            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password..." />
                    </div>
                    <div className='mt-3'>
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            required
                        />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                    </div>

                    <input type="Submit" className="btn mt-3" value={'Register'} />
                    <h4 className='mt-3'>Already Have an Account? <a href="/login">Login</a></h4>
                </form>
            </div>
        </div>
    )
}