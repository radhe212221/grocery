import { Button } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SpashScreen from './screens/splash-screen'
export default function App() {
    return (
        <BrowserRouter>
            <SpashScreen />
            <SpashScreen />
        </BrowserRouter>
    )
}
