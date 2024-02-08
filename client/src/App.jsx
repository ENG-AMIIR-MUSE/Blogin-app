import React from 'react'
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

export default function App() {
  return (
    <>
  <h1 className='bg-red-900' >welcome</h1>
  <Routes>
    <Route path = '/home' element = {<Home/>}/>
    <Route path = '/projects' element = {<Projects/>}/>
    <Route path = '/sign-in' element = {<SignIn/>}/>
    <Route path = '/sign-up' element = {<SignUp/>}/>
    <Route path = '/dashboard' element = {<Dashboard/>}/>
    <Route path = '/about' element = {<About/>}/>
  </Routes>
    </>
  )
}
