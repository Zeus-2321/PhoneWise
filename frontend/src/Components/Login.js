import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "0.4rem 1rem",
        border: "none",
        borderRadius: "0.25rem",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        margin: "0.5rem",
    };
    return <button style={buttonStyle} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;