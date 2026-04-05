import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const res = await axios.post("http://localhost:5000/login", {
                email,
                password,
            })
            if (res.data.message.includes("Login successfully")) {
                navigate("/dashboard");
                alert("Login successfully");
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Login failed");
        }
        console.log(email, password);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-500">

            <form
                onSubmit={handleLogin}
                className="bg-gray-400 p-8 rounded-2xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

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
                    Login
                </button>
                <h3 className="text-lg mt-2">
                    If you do not have an account,{" "}
                    <Link
                        to="/register"
                        className="text-blue-800 underline hover:text-blue-600"
                    >
                        Register
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
    )
}

export default Login