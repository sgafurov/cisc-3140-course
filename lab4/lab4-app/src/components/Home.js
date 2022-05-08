import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/style.css'

export default function Home() {
    let navigate = useNavigate()

    const navigateAllCars = () => {
        navigate('/all-cars')
    }

    const navigateCarID = () => {
        navigate('/car-id')
    }

    const navigateCarMake = () => {
        navigate('/car-make')
    }

    const navigateNewData = () => {
        navigate('/new')
    }

    const navigateUpdateData = () => {
        navigate('/update')
    }

    return (
        <>
        <h1>Welcome to the Cars Database</h1>
        <button onClick={navigateAllCars}>Get all cars data</button>
        <button onClick={navigateCarID}>Get cars via car id</button>
        <button onClick={navigateCarMake}>Get cars via car make</button>
        <button onClick={navigateNewData}>Add new car data</button>
        <button onClick={navigateUpdateData}>Update car data</button>
        </>
    )
}