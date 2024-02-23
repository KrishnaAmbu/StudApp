import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

// function Viewstud() {
    const Viewstud = () =>{
        var[data,setData]= useState([]);
        useEffect(()=>{
            axios.get("http://localhost:4000/student")
       .then((response)=>{
            console.log(response)
            setData(response.data);
        })
        .catch((error)=>console.log(error));
    },[]);
  return (
    <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Names</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Age</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Dept</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((value,index)=>{
                    return(
                        <TableRow key={index}><TableCell>{value.name}</TableCell>
                       <TableCell>{value.age}</TableCell>
                        <TableCell>{value.dept}</TableCell></TableRow>
                    )
                })}
            </TableBody>
        </Table>

    </TableContainer>
</div>
  )
}

export default Viewstud