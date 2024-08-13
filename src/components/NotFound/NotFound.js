import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
    <p className="text-2xl md:text-3xl font-light mt-2 text-gray-700">Oops! Page not found</p>
    <p className="mt-4 mb-8 text-gray-500">The page you are looking for doesn't exist or has been moved.</p>
    <Link to="/" className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
        Go Home
    </Link>
</div>
  )
}

export default NotFound