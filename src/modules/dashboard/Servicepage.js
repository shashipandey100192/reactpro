import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Servicepage() {

    const [x, y] = useState([]);

    const myapi = () => {
        axios.get("https://dummyjson.com/products").then((r) => {
            console.log(r.data.products);
            y(r.data.products);
        });
    }

    // const myapi = ()=>
    // {
    //     fetch("https://dummyjson.com/products").then((r)=>{
    //         console.log(r);
    //     })
    // }


    useEffect(() => {
        myapi();
    }, [0])








    return (
        <div className='container-fluid'>
            <div className='row'>
                {x.map((c)=>{
                    return(
                        <div className='col-md-3'>
                    <div class="card">
                        <img src={c.thumbnail} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <h3>{c.price} <del className='text-secondary'> mrp:{parseInt(c.price*30/100+ c.price)}</del></h3>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Servicepage