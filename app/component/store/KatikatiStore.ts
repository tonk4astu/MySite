import { create,StateCreator } from "zustand";

export type KatikatiStore = {
    Rotate: number,
    Bell:number,
    Cherry: number,
    StrongCherry: number,
    WaterMelon: number,
    StrongWaterMelon: number,
    ChanceA: number,
    ChanceB: number,
    AveBell: number,
    AveCherry: number,
    AveStrongCherry: number,
    AveWaterMelon: number,
    AveStrongWaterMelon: number,
    AveChanceA: number,
    AveChanceB: number,
    CalcAverage:
     (
        Rotate: number, 
        Bell:number,
        Cherry: number, 
        StrongCherry: number, 
        WaterMelon: number, 
        StrongWaterMelon: number, 
        ChanceA: number, 
        ChanceB: number
        ) => void,
}

export const useKatikatiStore = create<KatikatiStore>((set, get) => ({
    Rotate: 0,
    Bell:0,
    Cherry: 0,
    StrongCherry: 0,
    WaterMelon: 0,
    StrongWaterMelon: 0,
    ChanceA: 0,
    ChanceB: 0,
    AveBell: 0,
    AveCherry: 0,
    AveStrongCherry: 0,
    AveWaterMelon: 0,
    AveStrongWaterMelon: 0,
    AveChanceA: 0,
    AveChanceB: 0,
    CalcAverage: () => set(
        (state) => ({
            AveBell: (Math.floor((state.Bell / state.Rotate * 10000)) / 100),
            AveCherry: (Math.floor((state.Cherry / state.Rotate * 10000)) / 100),
            AveStrongCherry: (Math.floor((state.StrongCherry / state.Rotate * 10000)) / 100),
            AveWaterMelon: (Math.floor((state.WaterMelon / state.Rotate * 10000)) / 100),
            AveStrongWaterMelon: (Math.floor((state.StrongWaterMelon / state.Rotate * 10000)) / 100),
            AveChanceA: (Math.floor((state.ChanceA / state.Rotate * 10000)) / 100),
            AveChanceB: (Math.floor((state.ChanceB / state.Rotate * 10000)) / 100),
        })
    ),
}));
