import React, { useState } from 'react'

function Myform() {
const [svariable,sfunc]=useState("kumar")

const changevalue = (myelement)=>{
  console.log(svariable);
  sfunc(myelement.target.value);
}

const [jcolor,jfunc]=useState("red");
const mycolor = (e)=>{
  jfunc(e.target.value)
}

  return (
    <form>
    <div className='container border p-5 shadow cus-form' style={{backgroundColor:`${jcolor}`}}>
      <div className='row'>
        <div className='col-12'>
          <input type='color' value={jcolor} onInput={mycolor}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <label className="form-label">fullName</label>
          <input type="text" className="form-control" value={svariable} onChange={changevalue}/>
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">Email address</label>
          <input type="email" className="form-control"/>
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">Phone No</label>
          <input type="text" className="form-control" />
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">Gender</label>
          <section className="mt-2">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="a" />
            <label className="form-check-label">1</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="a" />
            <label className="form-check-label">2</label>
          </div>
          </section>

        </div>

        <div className='col-md-12'>
          <label className="form-label">Comments</label>
          <textarea className="form-control"></textarea>
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">password</label>
          <input type="text" className="form-control" />
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">repassword</label>
          <input type="text" className="form-control" />
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-12 text-center p-3'>
         <button className="btn btn-primary btn-sm">submit</button>
         <button className="btn btn-danger btn-sm ms-2">Cancle</button>
        </div>

      </div>
    </div>
    </form>
  )
}

export default Myform


