import react from 'react'
import axios from 'axios'

export default function Home() {
    const getAllCars = async() => {
        try {
            const result = await fetch(`localhost:3000/api/cars/all`)
            console.log(result.json())
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
        <h1>Welcome to the Cars Database</h1>
        <button onClick={getAllCars}>Get all cars data</button>
        </>
    )
}