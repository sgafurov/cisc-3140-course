import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()
    const [cars, setCars] = useState(null)

    const navigateAllCars = () => {
        navigate('/all-cars')
    }
    const navigateCarID = () => {
        navigate('/car-id')
    }

    return (
        <>
        <h1>Welcome to the Cars Database</h1>
        <button onClick={navigateAllCars}>Get all cars data</button>
        <button onClick={navigateCarID}>Get cars via car id</button>
        </>
    )
}