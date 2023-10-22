import React from 'react';
import {Myjsondata} from './Myjsondata';
import { AiFillApple,AiOutlineDropbox } from "react-icons/ai";
import { FcAlarmClock,FcApproval } from "react-icons/fc";

function Landingpage() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-3'>
          <div class="card text-bg-primary mb-3 shadow">
            <div class="card-header">Header <AiFillApple/></div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-warning mb-3 shadow">
            <div class="card-header">Header <AiOutlineDropbox/></div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-dark mb-3 shadow">
            <div class="card-header">Header <FcAlarmClock/></div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card text-bg-danger mb-3 shadow">
            <div class="card-header">Header <FcApproval/></div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <table class="table table-bordered">
            <thead className='table-dark'>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Working Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             
            {Myjsondata.map((item)=>{
                return(
                  <tr>
                  <th scope="row">{item.sno}</th>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.working ? "yes" : "No"}</td>
                  <td>
                    <button className='btn btn-primary btn-sm ms-2'>View</button>
                    <button className='btn btn-warning btn-sm ms-2'>Edit</button>
                    <button className='btn btn-danger btn-sm ms-2'>Del</button>
                  </td>
                </tr>)
            })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Landingpage