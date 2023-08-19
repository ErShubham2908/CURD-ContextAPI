import React, { useContext } from 'react'
import './Style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import StoreData from './Store';
function EditStudent() {
    const ContextData = useContext(StoreData);
    const Navi = useNavigate();
    const IndexValue = useLocation().state.data;
    console.log(ContextData);
    console.log(IndexValue);

    const updateObj = {
        Name: ContextData.stuName[IndexValue].Name,
        Age: ContextData.stuName[IndexValue].Age,
        Course: ContextData.stuName[IndexValue].Course, 
        Batch: ContextData.stuName[IndexValue].Batch
    }
    const handleChange =(event) => {
        updateObj[event.target.name] = event.target.value;
    }
    const handleClick = () => {
        ContextData.stuName[IndexValue] = updateObj;
        Navi('/cruddata')
        // Navi('/student')
    }
  return (
    <>
     <h1>Edit Student Detail</h1> 
     <form className='form'>
        <div className='lForm'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder={ContextData.stuName[IndexValue].Name} name='Name' onChange={handleChange} />
          <label htmlFor='age'>Age</label>
          <input type='text' id='age' placeholder={ContextData.stuName[IndexValue].Age} name='Age' onChange={handleChange} />
        </div>
        <div className='lForm'>
          <label htmlFor='course'>Course</label>
          <input type='text' id='course' placeholder={ContextData.stuName[IndexValue].Course} name='Course' onChange={handleChange} />
          <label htmlFor='batch'>Batch</label>
          <input type='text' id='batch' placeholder={ContextData.stuName[IndexValue].Batch} name='Batch' onChange={handleChange} />
        </div>
        <button className='btn' type='button' onClick={handleClick} >Update Student</button>
        <button className='btn' type='button' onClick={() => Navi('/cruddata')} >Cancel</button>
      </form>
    </>
  )
}

export default EditStudent
