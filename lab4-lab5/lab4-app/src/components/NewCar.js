import React, { useEffect, useState } from 'react'
import '../styles/style.css'

export default function NewCar() {
    const [cars, setCars] = useState([])
    const [formData, setFormData] = useState({
        timestamp: null, email: null, name: null, year: null, make: null, model: null, car_id: null, judge_id: null, judge_name: null, racer_turbo: null, racer_supercharged: null, racer_performance: null, racer_horsepower: null, car_overall: null, engine_modifications: null, engine_performance: null, engine_chrome: null, engine_detailing: null, engine_cleanliness: null, body_frame_undercarriage: null, body_frame_suspension: null, body_frame_chrome: null, body_frame_detailing: null, body_frame_cleanliness: null, mods_paint: null, mods_body: null, mods_wrap: null, mods_rims: null, mods_interior: null, mods_other: null, mods_ice: null, mods_aftermarket: null, mods_wip: null, mods_overall: null
    })

    const postData = async () => {
        try {
            console.log(formData.car_id)
            const data = { ...formData }
            let res = await fetch("http://localhost:8080/api/cars/new", {
                method: "POST",

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    timestamp: new Date().toLocaleString("en-US"),
                    email: formData.email,
                    name: formData.name,
                    year: formData.year,
                    make: formData.make,
                    model: formData.model,
                    car_id: formData.car_id,
                    judge_id: formData.judge_id,
                    judge_name: formData.judge_name,
                    racer_turbo: formData.racer_turbo,
                    racer_supercharged: formData.racer_supercharged,
                    racer_performance: formData.racer_performance,
                    racer_horsepower: formData.racer_horsepower,
                    car_overall: formData.car_overall,
                    engine_modifications: formData.engine_modifications,
                    engine_performance: formData.engine_performance,
                    engine_chrome: formData.engine_chrome,
                    engine_detailing: formData.engine_detailing,
                    engine_cleanliness: formData.engine_cleanliness,
                    body_frame_undercarriage: formData.body_frame_undercarriage,
                    body_frame_suspension: formData.body_frame_suspension,
                    body_frame_chrome: formData.body_frame_chrome,
                    body_frame_detailing: formData.body_frame_detailing,
                    body_frame_cleanliness: formData.body_frame_cleanliness,
                    mods_paint: formData.mods_paint,
                    mods_body: formData.mods_body,
                    mods_wrap: formData.mods_wrap,
                    mods_rims: formData.mods_rims,
                    mods_interior: formData.mods_interior,
                    mods_other: formData.mods_other,
                    mods_ice: formData.mods_ice,
                    mods_aftermarket: formData.mods_aftermarket,
                    mods_wip: formData.mods_wip,
                    mods_overall: formData.mods_overall
                }),
            });

            let resJson = await res.json();
            console.log(resJson)

            if(resJson=='Added to db'){
                alert('Added to db')
            } else {
                alert(resJson.error)
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = { ...formData };
        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);

        postData()
        console.log(formData)
    }

    const handleChange = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = { ...formData };
        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);
    }

    return (
        <>
            <h1>Add A New Car</h1>

            <form onSubmit={handleSubmit} style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', width: '30%' }}>
                <input onChange={handleChange} type='text' name='timestamp' placeholder='timestamp (will be determined when you submit form)' disabled="true"/>
                <input onChange={handleChange} type='text' name='email' placeholder='email' />
                <input onChange={handleChange} type='text' name='name' placeholder='name' />
                <input onChange={handleChange} type='text' name='year' placeholder='year' />
                <input onChange={handleChange} type='text' name='make' placeholder='make' />
                <input onChange={handleChange} type='text' name='model' placeholder='model' />
                <input onChange={handleChange} type='text' name='car_id' placeholder='car_id' required='required' />
                <input onChange={handleChange} type='text' name='judge_id' placeholder='judge_id' />
                <input onChange={handleChange} type='text' name='judge_name' placeholder='judge_name' />
                <input onChange={handleChange} type='text' name='racer_turbo' placeholder='racer_turbo' />
                <input onChange={handleChange} type='text' name='racer_supercharged' placeholder='racer_supercharged' />
                <input onChange={handleChange} type='text' name='racer_performance' placeholder='racer_performance' />
                <input onChange={handleChange} type='text' name='racer_horsepower' placeholder='racer_horsepower' />
                <input onChange={handleChange} type='text' name='car_overall' placeholder='car_overall' />
                <input onChange={handleChange} type='text' name='engine_modifications' placeholder='engine_modifications' />
                <input onChange={handleChange} type='text' name='engine_performance' placeholder='engine_performance' />
                <input onChange={handleChange} type='text' name='engine_chrome' placeholder='engine_chrome' />
                <input onChange={handleChange} type='text' name='engine_detailing' placeholder='engine_detailing' />
                <input onChange={handleChange} type='text' name='engine_cleanliness' placeholder='engine_cleanliness' />
                <input onChange={handleChange} type='text' name='body_frame_undercarriage' placeholder='body_frame_undercarriage' />
                <input onChange={handleChange} type='text' name='body_frame_suspension' placeholder='body_frame_suspension' />
                <input onChange={handleChange} type='text' name='body_frame_chrome' placeholder='body_frame_chrome' />
                <input onChange={handleChange} type='text' name='body_frame_detailing' placeholder='body_frame_detailing' />
                <input onChange={handleChange} type='text' name='body_frame_cleanliness' placeholder='body_frame_cleanliness' />
                <input onChange={handleChange} type='text' name='mods_paint' placeholder='mods_paint' />
                <input onChange={handleChange} type='text' name='mods_body' placeholder='mods_body' />
                <input onChange={handleChange} type='text' name='mods_wrap' placeholder='mods_wrap' />
                <input onChange={handleChange} type='text' name='mods_rims' placeholder='mods_rims' />
                <input onChange={handleChange} type='text' name='mods_interior' placeholder='mods_interior' />
                <input onChange={handleChange} type='text' name='mods_other' placeholder='mods_other' />
                <input onChange={handleChange} type='text' name='mods_ice' placeholder='mods_ice' />
                <input onChange={handleChange} type='text' name='mods_aftermarket' placeholder='mods_aftermarket' />
                <input onChange={handleChange} type='text' name='mods_wip' placeholder='mods_wip' />
                <input onChange={handleChange} type='text' name='mods_overall' placeholder='mods_overall' />

                <input type='submit' />
            </form>
        </>
    )
}