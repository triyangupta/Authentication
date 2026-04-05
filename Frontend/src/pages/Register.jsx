import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        if (!name || !email || !password) {
            setError("All fields are required");
            return;
        }
        setError("");

        try {
            const res = await axios.post("http://localhost:5000/register", {
                name,
                email,
                password
            })
            if (res.data.message.includes("registered")) {
                alert("User registered successfully");
                navigate("/login");
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }


    };
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-500">

                <form
                    onSubmit={handleRegister}
                    className="bg-gray-400 p-8 rounded-2xl shadow-lg w-full max-w-sm"
                >
                    <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

                    {error && (
                        <p className="text-red-600 text-center mb-3">{error}</p>
                    )}

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer"
                    >
                        Register
                    </button>
                    <h3 className="text-lg mt-2">
                        If you have already account{" "}
                        <Link
                            to="/login"
                            className="text-blue-300 underline hover:text-blue-400"
                        >
                            Login
                        </Link>
                    </h3>
                    <div className='flex justify-end'>
                        <Link to={"/"}
                            className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 mt-4">
                            Back
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register
