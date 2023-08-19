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
        {Name : "Shubham Kumar",  Age: 23, Course: "Civil Eng.", Batch: "CIV21"},
        {Name : "Milan Singh",    Age: 20, Course: "Electronic Eng.", Batch: "ECE20"},
        {Name : "Surbhi Jha",   Age: 21, Course: "Web Developer Eng.", Batch: "CSE22"},
        {Name : "Prachi Singh",   Age: 22, Course: "Java Developer Eng.", Batch: "IT21"},
        {Name : "Sunny Kumar Singh",    Age: 21, Course: "Durgs Inspection Eng.", Batch: "BIO21"},
        {Name : "Prashant Kumar ", Age: 23, Course: "Design and Model", Batch: "ME23"},
        {Name : "Archana Singh",  Age: 21, Course: "C++ Developer Eng.", Batch: "CSE20"},
        {Name : "Sachin Kumar Singh",   Age: 20, Course: "Python Developer Eng.", Batch: "CSE21"},
        {Name : "Rajni Singh",    Age: 21, Course: "Audino Designer Eng.", Batch: "ECE21"},
        {Name : "Sumit Kumar Singh",    Age: 23, Course: "Machine Learning", Batch: "CSE22"},
        {Name : "Arvindra Singh", Age: 25, Course: "Data Structure", Batch: "IT23"},
    ])

  return (
    <>
      <BrowserRouter>
        <div className='pNav'>
          <NavLink className='pNavLink' style={({ isActive }) => ({color: isActive ? "greenyellow" : "white"})} to='/' > Home </NavLink>
          <NavLink className='pNavLink' style={({ isActive }) => ({color: isActive ? "greenyellow" : "white"})} to='/cruddata' >CRUD Operation</NavLink>
          <NavLink className='pNavLink' style={({ isActive }) => ({color: isActive ? "greenyellow" : "white"})} to='/contact' >Contact</NavLink>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/cruddata' element={
                <StoreData.Provider value={{stuName : studentData, updateStu : setStudentData}}>
                    <Student />
                </StoreData.Provider>
            } />
            <Route path='/addnewdata' element={
              <StoreData.Provider value={{stuName : studentData, updateStu : setStudentData}}>
                <AddNewStudent />
              </StoreData.Provider>
            }/>
            <Route path='/editdata' element={
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
