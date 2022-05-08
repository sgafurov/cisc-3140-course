import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/style.css'

export default function Navbar() {
    let navigate = useNavigate()

    const navigateHome = () => {
        navigate('/')
    }
    return (
        <button onClick={navigateHome}>HOME</button>
    )
}