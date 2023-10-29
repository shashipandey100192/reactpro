import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewLeptop() {
  const [mydata,mydatafunc]=useState([])

    const myapi = ()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
        console.log(res.data.products);
        mydatafunc(res.data.products);
        })
    }

    useEffect(()=>{
      myapi();
    },[])


  return (
   <div className='container'>
    <div className='row'>
     
      {mydata.map((d)=>{
        return(
      <div className='col-md-4'>
        <div className='card p-2 shadow bg-light'>
        <h4>{d.id}</h4>
        <h4>{d.brand}</h4>
        <h4>{d.category}</h4>
        <img src={d.images[0]} width={200}/>
      </div>
      </div>

        )

      })}


   
    </div>
   </div>
  )
}

export default NewLeptop