'use client'
import { useState } from 'react'
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/react';
export default function Page() {
  const [count, setCount] = useState(0);
  const [start,setStart] = useState(0);
  const [average,setAverage] = useState(0);
  const [btncount,setBtncount] = useState(1);
  
  return (
    <>
    <h2>Average:{average}</h2>
    <h3>Start:{start}</h3>
      <Card  className={`flex flex-col`}>
      <div>
        Start:<input type='number' value={start} onChange={(e)=>setStart(Number(e.target.value))}></input>
          </div>
      <div >
        <input type="number" value={count} onChange={(e)=>{
          setCount(Number(e.target.value));
        }} />
      </div>
      </Card>
      <Button onClick={() =>{
        setBtncount(btncount+1);
        //小数点第三位以下切り捨て
          const newCount = (Math.floor(((count - start)/btncount)*100))/100;
          setAverage(newCount);
        }} >clac</Button>
    </>
  )
}