import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/style.css'

export default function Navbar() {
    let navigate = useNavigate()

    const navigateHome = () => {
        navigate('/')
    }
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

    const navigateDeleteData = () => {
        navigate('/delete')
    }

    return (
        <>
            <div id='home-elements'>


                <div id='home-btns'>
                    <button className='nav-btn' onClick={navigateHome}>HOME</button>
                    <button className='nav-btn' onClick={navigateAllCars}>Get All Cars Data</button>
                    <button className='nav-btn' onClick={navigateCarID}>Get Cars Via Car ID</button>
                    <button className='nav-btn' onClick={navigateCarMake}>Get Cars Via Car Make</button>
                    <button className='nav-btn' onClick={navigateNewData}>Add New Car Data</button>
                    <button className='nav-btn' onClick={navigateUpdateData}>Update Car Data</button>
                    <button className='nav-btn' onClick={navigateDeleteData}>Delete Car Data</button>
                </div>
            </div>
        </>
    )
    // return (
    //     <button onClick={navigateHome} id='nav-btn'>HOME</button>
    // )
}