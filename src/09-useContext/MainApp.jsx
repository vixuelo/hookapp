 import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import {  AboutPage} from './AboutPage'
import {  LoginPage} from './LoginPage'
import { Error404Page } from './Error404Page'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'
 
 export const MainApp = () => {
    const sites = ["Home", "About", "Login"];
   return (
        <UserProvider>
            <h1>MainApp</h1>
            <hr />
            <NavBar />
            <Routes>
                <Route path="/" element= {<HomePage/>} />
                <Route path="/Login" element= {<LoginPage/>} />
                <Route path="/About" element= {<AboutPage/>} />
                <Route path="/Error404" element= {<Error404Page/>} />

                <Route path="/*" element= {<Navigate to="/error404"/>} />
            </Routes>
        </UserProvider>
    )
 }
 