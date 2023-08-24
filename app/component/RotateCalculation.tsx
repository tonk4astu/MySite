'use client'
import { useCalcStore } from './store/CalcStore';
import { Card,CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/react';
export default function Calculation() {
  const count = useCalcStore(state => state.count);
  const start = useCalcStore(state => state.start);
  const btncount = useCalcStore(state => state.btncount);
  const average = useCalcStore(state => state.average);
  const CalcAverage = useCalcStore(state => state.CalcAverage);
  const BtnCountInc = useCalcStore(state => state.BtnCountInc);
  const Reset = useCalcStore(state => state.Reset);
  return (
    <Card  className={` bg-slate-800 text-slate-300 max-w-fit`}>
    <CardHeader className=' block text-slate-300'>
        <h2>Average:{average}</h2>
        <h3>Start:{start}</h3>
    </CardHeader>
      <div className=' p-2'>
        Start:<input type='number' value={start}
        onChange={(e)=>{
            useCalcStore.setState({start:parseInt(e.target.value)});
        }} ></input>
          </div>
      <div className=' p-2'>
        総回転数:<input type="number" value={count} 
        onChange={(e)=>{
            useCalcStore.setState({count:parseInt(e.target.value)});
        }}/>
      </div>
      <Button onClick={() =>{
        BtnCountInc();
        CalcAverage(count,start,btncount,average);
        }} >計算</Button>
        <Button className=' bg-yellow-400' onClick={() =>{
            confirm("現在の情報をすべてリセットします。")?Reset():"";
            }} >リセット</Button>
    </Card>
  )
}