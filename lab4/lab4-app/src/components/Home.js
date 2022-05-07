import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()
    // const [cars, setCars] = useState(null)

    const navigateAllCars = () => {
        navigate('/all-cars')
    }

    const navigateCarID = () => {
        navigate('/car-id')
    }

    const navigateCarMake = () => {
        navigate('/car-make')
    }

    return (
        <>
        <h1>Welcome to the Cars Database</h1>
        <button onClick={navigateAllCars}>Get all cars data</button>
        <button onClick={navigateCarID}>Get cars via car id</button>
        <button onClick={navigateCarMake}>Get cars via car make</button>
        <h1>add a way to insert and update</h1>
        <h1>look up how to organize it into a table format</h1>
        </>
    )
}