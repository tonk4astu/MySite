import { create,useStore } from "zustand";

type CalcStore = {
    count: number,
    start: number,
    average: number,
    btncount: number,
    setCount: (count: number) => void,
}