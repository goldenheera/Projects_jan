import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Dashbord() {
   const Navigate = useNavigate()
    const users = [
        { no: 1, name: "Amit Sharma", age: 24 },
        { no: 2, name: "Neha Verma", age: 22 },
        { no: 3, name: "Rahul Singh", age: 27 },
        { no: 4, name: "Pooja Patel", age: 25 }
    ];
    return (

        <div className="container">
            <p className="">Admin Dashbord </p>
            <p className="">Go to product sumary</p>
            <Link to ="/user" >
            Go to user details
            </Link>

            <table className="table table-bordered ">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.no} >
                                <th scope="row">{user.no}</th>
                                <td>{user.name}</td>
                                <td>{user.age}</td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>



    );
}

export default Dashbord;
