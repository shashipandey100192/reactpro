
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


function Myproductdetails() {
    const {id}=useParams();
    console.log(id);

    const [mydata,mydatafunc]=useState({})

    const ProductDetails = ()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((res)=>{
        console.log(res.data);
        mydatafunc(res.data)
        })
    }

    useEffect(()=>{
        ProductDetails();
    },[])


  return (
    <div className='container'>
        <div className='row border p-5 bg-light'>
            <div className='col-5'>
                {/* <img src={mydata.images[0]} className='img-fluid' alt='sdhfjksdhf'/> */}
            </div>
            <div className='col-7'>
                <h1>Product Id: {mydata.id}</h1>
                <h2>brand: {mydata.brand}</h2>
                <h3>Details : {mydata.description}</h3>
            </div>
        </div>
    </div>
  )
}

export default Myproductdetails