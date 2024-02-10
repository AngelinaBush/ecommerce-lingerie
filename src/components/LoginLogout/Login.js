import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegUser } from "react-icons/fa";
import './Log.css';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (

        !isAuthenticated && (
            <div>
                <button className="nav-icon"><FaRegUser onClick={() => loginWithRedirect()} /></button>
            </div>
        )   
    )
}

export default Login;