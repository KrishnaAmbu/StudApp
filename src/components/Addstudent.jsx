import { Button, TextField, Typography } from '@mui/material'
import React,{ useState } from 'react'
import axios from 'axios';

//  function Addstudent() {
  const AddStudent = () =>{
    var[data,setData]= useState();
     const student=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }


   const submit=()=>{
    axios.post("http://localhost:4000/student",{
      student_name:data.name,
      student_age:data.age,
      student_dept:data.dept,
      })
      .then(()=>{
        alert("New entry created successfully");
      })
      .catch(()=>{
        alert("error saving data");
      });
   }
  return (
    <div>
        <Typography variant='h6'>Name:</Typography>
        <TextField variant='outlined' label="enter your name" onChange={student} ></TextField><br />
        <Typography variant='h6'>Age:</Typography>
        <TextField variant='outlined' label="enter your age"onChange={student}></TextField><br />
        <Typography variant='h6'>Dept:</Typography>
        <TextField variant='outlined' label="enter your dept"onChange={student}></TextField><br /><br />
        <Button variant='contained' onClick={submit}>Submit</Button>
    </div>
  )

  }
export default AddStudent