import { Button } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SpashScreen from './screens/splash-screen'
import LoginPage from './screens/login-page'
export default function App() {
    return (
        <BrowserRouter>
            {/* <SpashScreen /> */}
            <LoginPage />
        </BrowserRouter>
    )
}
