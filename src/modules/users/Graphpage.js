import React,{useState,useEffect, Fragment} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';


function Graphpage() {
const [c,d]=useState([]);
  const [a,b]=useState([]);
const [x, y] = useState([]);

    const myapi = () => {
        axios.get("https://dummyjson.com/products").then((r) => {
            console.log(r.data.products);
            y(r.data.products);
            d(r.data.products)
           
          const mydata = r.data.products.map((d)=>{
            return d.category
          });

          const que = [... new Set(mydata)];
          b(que);

        });
    }

const mydatafilter = (v)=>{
    console.log(v.target.value);
    const a= c.filter((f)=>{
      return f.category===v.target.value;
    });
    y(a);
}


    useEffect(()=>{
      myapi();
    },[])

  return (
    <Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3'>
              <select className='form-select' onInput={mydatafilter}>
                {a.map((c)=>{
                  return(
                    <option>{c}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>

  
    <BarChart
      style={{ width: '100%', maxWidth: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={x}
    >
      {/* <CartesianGrid /> */}
      <XAxis dataKey="category" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill='red'/>
      <Bar dataKey="stock"  fill='green'/>
    </BarChart>
      </Fragment>
  )
}

export default Graphpage