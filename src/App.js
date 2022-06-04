import { Button } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BottomBar from './comp/bottom-tab-navigation'
import SpashScreen from './screens/splash-screen'
import LoginPage from './screens/login-page'
import RegisterPage from './screens/register-page'
export default function App() {
    return (
        <BrowserRouter>
            {/* <SpashScreen /> */}
            <LoginPage />
            {/* <RegisterPage /> */}
            <BottomBar/>
        </BrowserRouter>
    )
}
