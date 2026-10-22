import React, { Fragment } from 'react'
import Headerpage from '../../shares/Headerpage'
import Sidebar from '../../shares/Sidebar'
import Mainpage from './Mainpage'
import { Outlet } from 'react-router-dom'

function Landingpage() {
  return (
    <Fragment>
        <Headerpage/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-2 border'>
                <Sidebar/>
            </div>
            <div className='col-10 border ch'>
               <Outlet></Outlet>
            </div>
        </div>
    </div>


    </Fragment>
  )
}

export default Landingpage