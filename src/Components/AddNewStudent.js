import React, { useContext } from 'react'
import StoreData from './Store'
import { useNavigate } from 'react-router-dom';
import './Style.css'

function AddNewStudent() {
    const ContextData = useContext(StoreData);
    const Navi = useNavigate();
    console.log(ContextData);
    const newStu = {
        Name: '', 
        Age:'', 
        Course :'', 
        Batch:''
    }

    const handleChange = (e) => {
        newStu[e.target.name] = e.target.value;
    }

    const handleClick = () => {
        ContextData.stuName.push(newStu);
        Navi('/cruddata')
    }
  return (
    <div className='pDiv'>
      <h1 className='nStu'>New Student</h1>
      <form className='form'>
        <div className='lForm'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Enter Your Name' name='Name' onChange={handleChange} />
          <label htmlFor='age'>Age</label>
          <input type='text' id='age' placeholder='Enter Your Age' name='Age' onChange={handleChange} />
        </div>
        <div className='lForm'>
          <label htmlFor='course'>Course</label>
          <input type='text' id='course' placeholder='Enter Your Course' name='Course' onChange={handleChange} />
          <label htmlFor='batch'>Batch</label>
          <input type='text' id='batch' placeholder='Enter Your Batch' name='Batch' onChange={handleChange} />
        </div>
        <button className='btn' type='button' onClick={handleClick} >Add New Student</button>
        <button className='btn' type='button' onClick={() => Navi('/cruddata')} >Cancel</button>
      </form>
    </div>
  )
}

export default AddNewStudent
