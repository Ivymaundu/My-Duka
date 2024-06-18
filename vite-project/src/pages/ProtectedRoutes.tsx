import { Outlet, Navigate } from "react-router-dom";

export default function Protected() {

    const login_status = localStorage.getItem("token")
    console.log("token ", login_status)
    if (!login_status ) {
        return <Navigate to="/login" />
    }
    return login_status ? <Outlet /> : <Navigate to="/login" />
};