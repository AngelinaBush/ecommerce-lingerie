import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (

        isAuthenticated && (
        <div>
            <div>
                <button className="nav-icon" onClick={() => logout()}><FaUser /></button>
            </div>

        </div>   
        )   
    )
}

export default Logout;