import React from 'react'
import Mysidebar from './shares/Mysidebar'
import { Outlet } from 'react-router-dom'

function Myservice() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2'>
                <section className='border p-3'>
                <Mysidebar/>
                </section>
                
            </div>
            <div className='col-md-10'>
            <section className='border p-3'>
                <h1>content page</h1>
                    <Outlet></Outlet>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Myservice