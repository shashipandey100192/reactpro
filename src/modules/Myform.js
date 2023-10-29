import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

var mydatalist=[];
function Myform() {
// const [svariable,sfunc]=useState("kumar")
// const changevalue = (myelement)=>{
//   console.log(svariable);
//   sfunc(myelement.target.value);
// }


const {register,handleSubmit,formState: { errors }} = useForm()
const mysubmit = (dobject)=>
{
  console.log(dobject);
  mydatalist.push(dobject);
  console.log(mydatalist);
  localStorage.setItem("formdata",JSON.stringify(mydatalist));

}


const [jcolor,jfunc]=useState("lightgray");
const mycolor = (e)=>{
  jfunc(e.target.value)
}

  return (
    <form onSubmit={handleSubmit(mysubmit)}>
    <div className='container border p-5 shadow cus-form' style={{backgroundColor:`${jcolor}`}}>
      <div className='row'>
        <div className='col-12'>
          <input type='color' value={jcolor} onInput={mycolor}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <label className="form-label">fullName</label>
          <input type="text" className="form-control" {...register("fullname",{ required: true,pattern:/^[A-Za-z]+$/i})} name='fullname'/>
          {errors.fullname && <span className='text-danger h6'>full name is required</span>}
        </div>
        <div className='col-md-6'>
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" {...register("emailid",{ required: true })} name='emailid'/>
          {errors.emailid && <span className='text-danger h6'>email is required</span>}
        </div>
        <div className='col-md-6'>
          <label className="form-label">Phone No</label>
          <input type="text" className="form-control" {...register("phoneno")} name='phoneno'/>
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">Gender</label>
          <section className="mt-2">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" value="male" name="a" {...register("gender")} />
            <label className="form-check-label">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" value="female" name="a" {...register("gender")}/>
            <label className="form-check-label">female</label>
          </div>
          </section>

        </div>

        <div className='col-md-12'>
          <label className="form-label">Comments</label>
          <textarea className="form-control" {...register("comment")} name='comment'></textarea>
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">password</label>
          <input type="text" className="form-control" {...register("pass")} name='pass'/>
          <div className="form-text">anyone else.</div>
        </div>
        <div className='col-md-6'>
          <label className="form-label">repassword</label>
          <input type="text" className="form-control" {...register("repass")} name='repass'/>
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


