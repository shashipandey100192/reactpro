import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'kumar',
    uv: 8490,
    pv: 55300,
    amt: 3100,
  },
];


function Graphpage() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      {/* <CartesianGrid /> */}
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill='red'/>
      <Bar dataKey="uv"  fill='green'/>
      <Bar dataKey="amt"  fill='blue'/>
    </BarChart>
  )
}

export default Graphpage