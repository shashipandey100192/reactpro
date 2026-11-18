import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { FaListOl } from "react-icons/fa";
import { toast,ToastContainer } from 'react-toastify';


function Adminlandingpage() {

    const [admin, updateadmin] = useState([])
    const getadmin = () => {
        axios.get("http://localhost:8700/admin").then((d) => {
            console.log(d);
            updateadmin(d.data);
        })
    }

    useEffect(() => {
        getadmin();
    }, [])


const deletepro = (myid)=>{
    console.log(myid)
    axios.delete(`http://localhost:8700/admin/${myid}`).then((r)=>{
        toast.success("user deleted successfully",{autoClose:2000,position:"top-left",theme:'dark'});
        getadmin();
    })
}


    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div class="card text-bg-primary mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Total Admins</h5>
                                    <p class="card-text h1">{admin.length}</p>
                                    <ToastContainer/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card text-bg-success mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card text-bg-danger mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div class="card text-bg-danger mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card text-bg-danger mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div class="card text-bg-dark mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Admin List <FaListOl/></h5>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">id</th>
                                                <th scope="col">username</th>
                                                <th scope="col">email</th>
                                                <th scope="col">phone</th>
                                                <th scope="col">gender</th>
                                                <th scope="col">comments</th>
                                                <th scope="col">action</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {admin.map((d,a=1) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{++a}</th>
                                                        <td>{d.username}</td>
                                                        <td>{d.email}</td>
                                                        <td>{d.phone}</td>
                                                        <td>{d.gender}</td>
                                                        <td>{d.comments}</td>
                                                        <td>
                                                            <button className='btn btn-sm btn-danger' onClick={()=>deletepro(d.id)}><MdDelete /></button>
                                                            <button className='btn btn-sm btn-warning ms-2'><MdEditSquare /></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div class="card text-bg-danger mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div class="card text-bg-danger mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div class="card text-bg-danger mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div class="card text-bg-danger mb-3 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Scard’s content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminlandingpage