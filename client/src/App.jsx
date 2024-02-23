import React from 'react'
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Header from './Components/Header';
import FooterCom from './Components/FooterCom';
import PrivateRoute from './Components/PrivateRoute';


export default function App() {
  return (
    <>
  <Header/>
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/projects' element = {<Projects/>}/>
    <Route path = '/sign-in' element = {<SignIn/>}/>
    <Route path = '/sign-up' element = {<SignUp/>}/>
    <Route element=  {<PrivateRoute/>}>
    <Route path = '/dashboard' element = {<Dashboard/>}/>

    </Route>
    <Route path = '/about' element = {<About/>}/>
  </Routes>
  <FooterCom/>
    </>
  )
}
