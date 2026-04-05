import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center justify-center text-white">

      <h1 className="font-bold text-3xl mb-4">
        Home
      </h1>

      <h3 className="text-lg">
        If you do not have an account, then create{" "}
        <Link 
          to="/register" 
          className="text-blue-300 underline hover:text-blue-400"
        >
          Register
        </Link>
      </h3>
      <h3 className="text-lg">
        If you have already account{" "}
        <Link 
          to="/login" 
          className="text-blue-300 underline hover:text-blue-400"
        >
          Login
        </Link>
      </h3>

    </div>
  )
}

export default Home