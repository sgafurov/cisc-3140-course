import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/style.css'

export default function CarMake() {
    const [cars, setCars] = useState([])
    const [make, setMake] = useState()

    const fetchData = async (e) => {
        try {
            e.preventDefault()
            let makeArray = make.split('')
            let makeTitleCase = makeArray[0].toUpperCase() + make.substring(1).toLowerCase()
            console.log(makeTitleCase)

            const result = await fetch(`http://localhost:8080/api/cars/make/${makeTitleCase}`)
            const resultObj = await result.json()
            const resultObjData = resultObj.data
            setCars(resultObjData)

            console.log('cars = ', cars)
            console.log('cars[0] = ', cars[0])
            // navigate('/allCarsData')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <h1>Get Car via Car Make</h1>

            <form onSubmit={(e) => fetchData(e)}>
                <label>
                    Car Make:
                    <input onChange={(e) => setMake(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Car_ID</th>
                        <th>Judge_ID</th>
                        <th>Judge_Name</th>
                        <th>Racer_Turbo</th>
                        <th>Racer_Supercharged</th>
                        <th>Racer_Performance</th>
                        <th>Racer_Horsepower</th>
                        <th>Car_Overall</th>
                        <th>Engine_Modifications</th>
                        <th>Engine_Performance</th>
                        <th>Engine_Chrome</th>
                        <th>Engine_Detailing</th>
                        <th>Engine_Cleanliness</th>
                        <th>Body_Frame_Undercarriage</th>
                        <th>Body_Frame_Suspension</th>
                        <th>Body_Frame_Chrome</th>
                        <th>Body_Frame_Detailing</th>
                        <th>Body_Frame_Cleanliness</th>
                        <th>Mods_Paint</th>
                        <th>Mods_Body</th>
                        <th>Mods_Wrap</th>
                        <th>Mods_Rims</th>
                        <th>Mods_Interior</th>
                        <th>Mods_Other</th>
                        <th>Mods_ICE</th>
                        <th>Mods_Aftermarket</th>
                        <th>Mods_WIP</th>
                        <th>Mods_Overall</th>
                    </tr>
                </thead>

                <tbody>
                    {cars.map((car, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{cars[index].Timestamp}</td>
                                    <td>{cars[index].Email}</td>
                                    <td>{cars[index].Name}</td>
                                    <td>{cars[index].Year}</td>
                                    <td>{cars[index].Make}</td>
                                    <td>{cars[index].Model}</td>
                                    <td>{cars[index].Car_ID}</td>
                                    <td>{cars[index].Judge_ID}</td>
                                    <td>{cars[index].Judge_Name}</td>
                                    <td>{cars[index].Racer_Turbo}</td>
                                    <td>{cars[index].Racer_Supercharged}</td>
                                    <td>{cars[index].Racer_Performance}</td>
                                    <td>{cars[index].Racer_Horsepower}</td>
                                    <td>{cars[index].Car_Overall}</td>
                                    <td>{cars[index].Engine_Modifications}</td>
                                    <td>{cars[index].Engine_Performance}</td>
                                    <td>{cars[index].Engine_Chrome}</td>
                                    <td>{cars[index].Engine_Detailing}</td>
                                    <td>{cars[index].Engine_Cleanliness}</td>
                                    <td>{cars[index].Body_Frame_Undercarriage}</td>
                                    <td>{cars[index].Body_Frame_Suspension}</td>
                                    <td>{cars[index].Body_Frame_Chrome}</td>
                                    <td>{cars[index].Body_Frame_Detailing}</td>
                                    <td>{cars[index].Body_Frame_Cleanliness}</td>
                                    <td>{cars[index].Mods_Paint}</td>
                                    <td>{cars[index].Mods_Body}</td>
                                    <td>{cars[index].Mods_Wrap}</td>
                                    <td>{cars[index].Mods_Rims}</td>
                                    <td>{cars[index].Mods_Interior}</td>
                                    <td>{cars[index].Mods_Other}</td>
                                    <td>{cars[index].Mods_ICE}</td>
                                    <td>{cars[index].Mods_Aftermarket}</td>
                                    <td>{cars[index].Mods_WIP}</td>
                                    <td>{cars[index].Mods_Overall}</td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}