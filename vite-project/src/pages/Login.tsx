import '../style/login.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleLoginAuth from './GoogleAuth';

interface Authtype {
    email: String,
    password: String
}

export default function Login(){
    const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    type ResponseData = {
        access_token: string,
        message: string,
        full_name: string
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let formContent: Authtype = {
            email: email,
            password: password
        };
        try {

            const apiUrl = 'http://127.0.0.1:8000/user_login';
            const response = await axios.post(apiUrl,
                { ...formContent }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('response', response.data)

            const responseData: ResponseData = {
                ...response.data
            }
            console.log("responseData.......", responseData)
            localStorage.setItem("token", responseData.access_token)
            localStorage.setItem("full_name", responseData.full_name)
            let mytoken =localStorage.getItem("token")
            console.log(mytoken)
            navigate("/dashboard")

        } catch (error) {
            console.log('error.......', error)
        }
    }

    return(
        <div className="body">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login to access more features</h1>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className="form-control" required 
                    value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email...."
                />
                </div>
                <div className="form-group">
                    <label htmlFor="">password</label>
                    <input type="password" name="password" className="form-control" required 
                     value={password} onChange={(e)=>setPassword(e.target.value)}   placeholder="enter password..."/>
                </div>
                
                <input type="Submit" className="btn" value={'Login'}/><br></br>
                <h4 className='mt-3'>Don't have an acccount? <a href="/register-user">Register</a></h4>
                <GoogleLoginAuth/>
            </form>
        </div>
        </div>
    )
}