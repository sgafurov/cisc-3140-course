import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeButton() {
    let navigate = useNavigate()
    
    return (
        <>
            <button onClick={navigate('/')}>HOME</button>
        </>
    )
}
