'use client'
import { useKatikatiStore,KatikatiStore } from './store/KatikatiStore';
import { Card,CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/react';
export default function katikati() {
    const Rotate = useKatikatiStore(state => state.Rotate);
    const Bell = useKatikatiStore(state => state.Bell);
    const Cherry = useKatikatiStore(state => state.Cherry);
    const StrongCherry = useKatikatiStore(state => state.StrongCherry);
    const WaterMelon = useKatikatiStore(state => state.WaterMelon);
    const StrongWaterMelon = useKatikatiStore(state => state.StrongWaterMelon);
    const ChanceA = useKatikatiStore(state => state.ChanceA);
    const ChanceB = useKatikatiStore(state => state.ChanceB);
    const AveBell = useKatikatiStore(state => state.AveBell);
    const AveCherry = useKatikatiStore(state => state.AveCherry);
    const AveStrongCherry = useKatikatiStore(state => state.AveStrongCherry);
    const AveWaterMelon = useKatikatiStore(state => state.AveWaterMelon);
    const AveStrongWaterMelon = useKatikatiStore(state => state.AveStrongWaterMelon);
    const AveChanceA = useKatikatiStore(state => state.AveChanceA);
    const AveChanceB = useKatikatiStore(state => state.AveChanceB);
    const CalcAverage = useKatikatiStore(state => state.CalcAverage);

    return (
        <Card  className={` bg-slate-800 text-slate-300 max-w-fit`}>
        <CardHeader className=' block text-slate-300'>
        Bell: {AveBell} <br />
        Cherry: {AveCherry} <br />
        StrongCherry: {AveStrongCherry} <br />
        WaterMelon: {AveWaterMelon} <br />
        StrongWaterMelon: {AveStrongWaterMelon} <br />
        ChanceA: {AveChanceA} <br />
        ChanceB: {AveChanceB} <br />
        <h4>Rotate: {Rotate} </h4><br />
            </CardHeader>
            <Chip onClick={()=>useKatikatiStore.setState({Bell: Bell + 1})}>
                🔔{Bell}
            </Chip>
            <input type="number" value={Rotate} onChange={(e)=>{
                useKatikatiStore.setState({Rotate:parseInt(e.target.value)});
                CalcAverage(Rotate,Bell,Cherry,StrongCherry,WaterMelon,StrongWaterMelon,ChanceA,ChanceB);
            }}/>
        </Card>
            
    )
}