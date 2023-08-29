import { create } from "zustand";
import {persist} from "zustand/middleware";

type CalcStore = {
  count: number;
  start: number;
  average: number;
  btncount: number;
  BtnCountInc: () => void,
    CalcAverage: (count: number,start:number,btncount:number,average:number) => void,
    Reset: () => void;
};


export const useCalcStore = create<CalcStore>()(
    persist(
    (set) => ({
    count: 0,
    start: 0,
    average: 0,
    btncount: 0,
    BtnCountInc:()=>set(
        (state)=>({ btncount:state.btncount+1 })
    ),
    CalcAverage: () => set(
        (state)=>({ average:(Math.floor((state.count - state.start)/state.btncount*100)/100) })
    ),
    Reset: () => {set(
        (state)=>({ count:0,start:0,average:0,btncount:0 }));
        localStorage.removeItem("calc-store");
            }
}),{name:"calc-store"}));