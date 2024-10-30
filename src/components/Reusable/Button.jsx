import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ link, className, children, ...props }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(link)
    }

    return (
        <button
            onClick={handleClick}
            className={`p-3 flex justify-center items-center transition duration-500 rounded-md bg-secondary text-white font-bold ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
