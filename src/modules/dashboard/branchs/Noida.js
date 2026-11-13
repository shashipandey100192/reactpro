import React from 'react'

function Noida(props) {

const emp = "ram kumar varma pppppp";

localStorage.setItem("mylocaldata",emp);


    return (
     <div className='container-fluid bg-dark text-white'>
        <div className='row'>
            <div className='col-12 p-5'>
                <h4>Noida </h4>
                {emp}
                <select>
                    {props.dis.map((d)=>{
                        return(
                            <option>{d.name}</option>
                        )
                    })}
                </select>

                <select>
                    {props.dis.map((d)=>{
                        return(
                            <option>{d.name}-{d.salary*10/100}</option>
                        )
                    })}
                </select>
                
            </div>
        </div>
    </div>
  )
}

export default Noida