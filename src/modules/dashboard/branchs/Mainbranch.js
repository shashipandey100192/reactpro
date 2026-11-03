import React from 'react'
import Delhibranch from './Delhibranch'
import UPbranch from './UPbranch'

function Mainbranch() {
const username = "rohit singh";
const msg = ()=>{
    alert("happy diwali 2026");
}

const studentlist=[
  { "name": "Rahul", "age": 25, "salary": 25000, "month": "January" },
  { "name": "Amit", "age": 28, "salary": 32000, "month": "February" },
  { "name": "Priya", "age": 24, "salary": 28000, "month": "March" },
  { "name": "Neha", "age": 26, "salary": 35000, "month": "April" },
  { "name": "Vikas", "age": 30, "salary": 40000, "month": "May" },
  { "name": "Pooja", "age": 23, "salary": 22000, "month": "June" },
  { "name": "Rohit", "age": 29, "salary": 38000, "month": "July" },
  { "name": "Anjali", "age": 27, "salary": 30000, "month": "August" },
  { "name": "Sandeep", "age": 32, "salary": 45000, "month": "September" },
  { "name": "Kavita", "age": 25, "salary": 27000, "month": "October" },
  { "name": "Deepak", "age": 31, "salary": 42000, "month": "November" },
  { "name": "Sneha", "age": 22, "salary": 20000, "month": "December" },
  { "name": "Arjun", "age": 26, "salary": 33000, "month": "January" },
  { "name": "Simran", "age": 28, "salary": 36000, "month": "February" },
  { "name": "Karan", "age": 24, "salary": 26000, "month": "March" },
  { "name": "Riya", "age": 29, "salary": 39000, "month": "April" },
  { "name": "Manish", "age": 33, "salary": 48000, "month": "May" },
  { "name": "Divya", "age": 27, "salary": 31000, "month": "June" },
  { "name": "Nitin", "age": 30, "salary": 41000, "month": "July" },
  { "name": "Shweta", "age": 25, "salary": 29000, "month": "August" }
];




  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-12 border'>
            <h1>Main Branch data</h1>
            <p>{username}</p>
        </div>
        <div className='col-md-6 bg-warning'>
            <h1>Delhi Branch Data</h1>
            <Delhibranch xyz={username}></Delhibranch>
            </div>
        <div className='col-md-6 bg-info'>
            <h1>UpBranch Data</h1>
            <UPbranch abc={username} message={msg} studata={studentlist}></UPbranch>
        </div>
    </div>
   </div>
  )
}

export default Mainbranch