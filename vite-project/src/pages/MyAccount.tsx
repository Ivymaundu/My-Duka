import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Authtype {
    username: String,
    password: String
}
export default function MyAccount() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    type ResponseData = {
        access_token: string,
        message: string,
        user_id: string
    }
    // const[value,setValue]=useState({
    //     username:"",
    //     password:""
    // }

    // const handleChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue({
    //         ...value,
    //         [e.target.name]:value
    //     });
    // }
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let formContent: Authtype = {
            username: username,
            password: password
        };
        try {

            const apiUrl = 'http://127.0.0.1:5000/login';
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
            // setIsLoggedIn(true);
            console.log("responseData.......", responseData)

            localStorage.setItem("token", responseData.access_token)
            localStorage.setItem("isLoggedIn", "true");
            let mytoken =localStorage.getItem("token")
            console.log(mytoken)
            setIsLoggedIn(true);
            navigate("/dashboard")

        } catch (error) {
            console.log('error.......', error)
        }
    }




    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">User Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput"
                  value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder="input username"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2"
                 value={password} onChange={(e)=>setPassword(e.target.value)}   placeholder="enter password..." />
            </div>
            {/* <a href="/register" style={{textDecoration:'none'}}>Don't have an account? Create one</a>  */}
            <button type='submit'>Login</button>

            
        </form>

    )
}