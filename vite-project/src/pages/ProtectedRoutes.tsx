import { Outlet,Navigate } from "react-router-dom";

export default function Protected(){

        const login_status=localStorage.getItem("isLoggedIn")
        console.log("isLoggedIn ",login_status)
        if (!login_status || login_status!=="true"){
            return <Navigate to ="/myaccount" />
        }
    return login_status ? <Outlet/> : <Navigate to= "/myaccount" />
};