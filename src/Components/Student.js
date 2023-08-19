import React, { useContext } from 'react'
import StoreData from './Store'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './Style.css'

function Student() {
    const ContextData = useContext(StoreData)
    const Navi = useNavigate()

    const handleDelete = (item) => {
      const newData = ContextData.stuName.filter((data) => data !== item)
      ContextData.updateStu(newData)
    };

  return (
    <div>
      <h1>Display Data</h1>
      <button className='btn' onClick={() => Navi('/addnewdata')} >Add New Student</button>
      <table>
        <thead>
          <tr>
            {/* <th>S No</th> */}
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {ContextData.stuName.map((item, index) => {
            return(
              <tr key={index}>
                {/* <td id='sno'>{index+1}</td> */}
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td style={{width : '10%'}}>{item.Batch}</td>
                <td ><Link className='link' state={{data : index}} to='/editdata'>Edit</Link> </td>
                <td > <FontAwesomeIcon onClick={() => handleDelete(item)} style={{color: "black"}} icon={faTrash} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Student
