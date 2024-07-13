import '../style/login.css'
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export default function RegisterBusiness() {
    const [company_name, setCompany_name] = useState<string>('');
    const [company_email, setCompany_email] = useState<string>('');
    const [logo, setLogo] = useState<string>('');
    const [company_contact, setCompany_contact] = useState<string>('');
    const [company_location, setCompany_location] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    const formData = {
        company_name,
        company_email,
        logo,
        company_contact,
        company_location,

    };
    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }
        try {
            const response = await axios.post('http://188.166.75.70/register_company', formData);
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
                    <h1>Register Your Business</h1>
                    <div className="form-group">
                        <label htmlFor="">Business Name</label>
                        <input type="text" name="business_name" className="form-control" required
                            value={company_name} onChange={(e) => setCompany_name(e.target.value)} placeholder="Business name..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email Adress</label>
                        <input type="email" name="email" className="form-control" required
                            value={company_email} onChange={(e) => setCompany_email(e.target.value)} placeholder="enter Business Email..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contact Number</label>
                        <input type="text" name="contact" className="form-control" required
                            value={company_contact} onChange={(e) => setCompany_contact(e.target.value)} placeholder="enter phone number..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Location (Physical address)</label>
                        <input type="" name="password" className="form-control" required
                            value={company_location} onChange={(e) => setCompany_location(e.target.value)} placeholder="enter password..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""><strong>Business Logo :</strong></label><br></br>
                        <input type="file" accept="image/*" value={logo} onChange={(e) => setLogo(e.target.value)} />
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