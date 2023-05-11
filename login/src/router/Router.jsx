import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { Profile } from '../pages/Profile'
import { useLogingStore } from '../login'

export const Router = () => {
    const {loggedIn} = useLogingStore()
  return (
    <>
    <ul>
        <li><NavLink to="/about">About</NavLink></li>
        {loggedIn &&  <li><NavLink to="/profile">Profile</NavLink></li>}
    </ul>
    <Routes>
        <Route path='/about' element={<About />}></Route>
        {loggedIn && <Route path='/profile' element={<Profile />}></Route>}
    </Routes>
    </>
  )
}
