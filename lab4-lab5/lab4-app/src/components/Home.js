import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import background from '../media/cars-image.jpg'

export default function Home() {

    return (
        <>
            <img src={background} id='background-img' />

            <h1 id='welcome-text'>Welcome to the Cars Database</h1>

        </>
    )
}