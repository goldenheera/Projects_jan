import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <p>This is login page</p>
            <Link to = '/dashbord'>
            <button> click me </button>
            </Link>

        </>
    );
}

export default Login;
