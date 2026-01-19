import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()
   const virify = ()=>
   {
    
    navigate('/dashbord')
   }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">

                        <h3 className="text-center mb-4">Sign In</h3>

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Username"
                        />

                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Password"
                        />

                        <button className="btn btn-primary w-100" onClick={virify}>
                            Login
                        </button>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;
