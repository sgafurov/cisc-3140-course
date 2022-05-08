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
        <div id='home-btns'>
        <button onClick={navigateAllCars}>Get All Cars Data</button>
        <button onClick={navigateCarID}>Get Cars Via Car ID</button>
        <button onClick={navigateCarMake}>Get Cars Via Car Make</button>
        <button onClick={navigateNewData}>Add New Car Data</button>
        <button onClick={navigateUpdateData}>Update Car Cata</button>
        </div>
        </>
    )
}