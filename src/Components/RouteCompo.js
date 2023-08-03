import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import StoreData from './Store'
import './Style.css'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'

function RouteCompo() {
    const [studentData, setStudentData] = useState([
        {Name : "John", Age: 23, Course: "MERN", Batch: "EA23"},
        {Name : "Smit", Age: 29, Course: "MEAN", Batch: "EA203"},
        {Name : "Kohli", Age: 25, Course: "JavScript", Batch: "EA123"},
        {Name : "Dhoni", Age: 40, Course: "Python", Batch: "EA230"},
        {Name : "Rohit", Age: 35, Course: "Java", Batch: "EA3"},
    ])

  return (
    <>
      <BrowserRouter>
        <div className='pNav'>
          <NavLink className='pNavLink' style={({ isActive }) => ({color: isActive ? "greenyellow" : "white"})} to='/' > Home </NavLink>
          <NavLink className='pNavLink' style={({ isActive }) => ({color: isActive ? "greenyellow" : "white"})} to='/student' >Student</NavLink>
          <NavLink className='pNavLink' style={({ isActive }) => ({color: isActive ? "greenyellow" : "white"})} to='/contact' >Contact</NavLink>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/student' element={
                <StoreData.Provider value={{stuName : studentData, updateStu : setStudentData}}>
                    <Student />
                </StoreData.Provider>
            } />
            <Route path='/addnewstudent' element={
              <StoreData.Provider value={{stuName : studentData, updateStu : setStudentData}}>
                <AddNewStudent />
              </StoreData.Provider>
            }/>
            <Route path='/editstudent' element={
              <StoreData.Provider value={{stuName : studentData, updateStu : setStudentData}}>
                <EditStudent />
              </StoreData.Provider>
            }/>

            <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteCompo;
