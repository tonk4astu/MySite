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
    AveBell: string,
    AveCherry: string,
    AveStrongCherry: string,
    AveWaterMelon: string,
    AveStrongWaterMelon: string,
    AveChanceA: string,
    AveChanceB: string,
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
    AveBell: '',
    AveCherry: '',
    AveStrongCherry: '',
    AveWaterMelon: '',
    AveStrongWaterMelon: '',
    AveChanceA: '',
    AveChanceB: '',
    CalcAverage: () => set(
        (state) => ({
            AveBell: Reduction(state.Bell,state.Rotate),
            AveCherry: Reduction(state.Cherry,state.Rotate),
            AveStrongCherry: Reduction(state.StrongCherry,state.Rotate),
            AveWaterMelon: Reduction(state.WaterMelon,state.Rotate),
            AveStrongWaterMelon: Reduction(state.StrongWaterMelon,state.Rotate),
            AveChanceA: Reduction(state.ChanceA,state.Rotate),
            AveChanceB: Reduction(state.ChanceB,state.Rotate)
        })
    ),
}));

//約分する関数
const  Reduction =(Hands:number,Rotate:number)=>{
    if(Hands===0){
        return `0/${Rotate}`;
    }
    if(Rotate===0){
        return '0';
    }
    //最大公約数を求める
    const gcd: (Hands: number, Rotate: number) => number =  (Hands, Rotate) => {
        if (Rotate === 0) {
          return Hands;
        }
        return gcd(Rotate, Hands % Rotate);
      }
      const numerator = Hands / gcd(Hands,Rotate);
    const denominator = Rotate / gcd(Hands,Rotate);
      return `${numerator}/${denominator}`;
}