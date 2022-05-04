import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AllCars(props) {
    const [cars, setCars] = useState([])

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const fetchData = async () => {
        try {
            const result = await fetch(`http://localhost:8080/api/cars/all`)
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
            <h1>All Cars</h1>
            {/* {cars.map(item => <h1>{item[1]}</h1>)} */}

            <button onClick={fetchData}>Get all cars data</button>

            <tr>Timestamp,Email,Name,Year,Make,Model,Car_ID,Judge_ID,Judge_Name,Racer_Turbo,Racer_Supercharged,Racer_Performance,Racer_Horsepower,Car_Overall,Engine_Modifications,Engine_Performance,Engine_Chrome,Engine_Detailing,Engine_Cleanliness,Body_Frame_Undercarriage,Body_Frame_Suspension,Body_Frame_Chrome,Body_Frame_Detailing,Body_Frame_Cleanliness,Mods_Paint,Mods_Body,Mods_Wrap,Mods_Rims,Mods_Interior,Mods_Other,Mods_ICE,Mods_Aftermarket,Mods_WIP,Mods_Overall</tr>
            {cars.map((car, index) => {
                return (
                    <>
                        <tr>

                            <tr>{cars[index].Timestamp}, {cars[index].Email}, {cars[index].Name}, {cars[index].Year}, {cars[index].Make}, {cars[index].Model}, {cars[index].Car_ID}, {cars[index].Judge_ID},{cars[index].Judge_Name}, {cars[index].Racer_Turbo}, {cars[index].Racer_Supercharged}, {cars[index].Racer_Performance}, {cars[index].Racer_Horsepower}, {cars[index].Car_Overall}, {cars[index].Engine_Modifications}, {cars[index].Engine_Performance}, {cars[index].Engine_Chrome}, {cars[index].Engine_Detailing}, {cars[index].Engine_Cleanliness}, {cars[index].Body_Frame_Undercarriage}, {cars[index].Body_Frame_Suspension}, {cars[index].Body_Frame_Chrome}, {cars[index].Body_Frame_Detailing}, {cars[index].Body_Frame_Cleanliness}, {cars[index].Mods_Paint}, {cars[index].Mods_Body}, {cars[index].Mods_Wrap}, {cars[index].Mods_Rims}, {cars[index].Mods_Interior}, {cars[index].Mods_Other}, {cars[index].Mods_ICE}, {cars[index].Mods_Aftermarket}, {cars[index].Mods_WIP}, {cars[index].Mods_Overall}</tr>
                        </tr>
                    </>
                );
            })}

        </>
    )
}