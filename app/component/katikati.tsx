'use client'
import { useKatikatiStore,KatikatiStore } from '../../store/KatikatiStore';
import { Card,CardHeader,CardBody } from '@nextui-org/card';
import { Chip,Input } from '@nextui-org/react';
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
        <Card  className={` bg-slate-800 text-slate-300`}>
        <CardHeader className=' block text-slate-300'>
        <span>🔔: {AveBell} </span>
        <span>🍒: {AveCherry} </span>
        <span>💪🍒: {AveStrongCherry} </span>
        <span>🍉: {AveWaterMelon}</span>
        <span>💪🍉: {AveStrongWaterMelon}</span>
        <span>CHANCE_A: {AveChanceA} </span>
        <span>CHANCE_B: {AveChanceB} </span>
        <h4>回転数: {Rotate} </h4>
            </CardHeader>
            <CardBody>
            <div className='grid grid-cols-[repeat(3,_minmax(200px,_1fr))] grid-rows-5 gap-3 '>
                <div className='flex h-14'>
                    <Input type="number" className=' ' value={Bell.toString()} onChange={(e)=>useKatikatiStore.setState({Bell:parseInt(e.target.value)})}/>
                    <div>
                        <Chip className=' whitespace-nowrap rounded-xl h-1/2 text-xs' onClick={()=>useKatikatiStore.setState({Bell: Bell + 1})}>
                            🔔🔺
                        </Chip>
                        <Chip className=' whitespace-nowrap rounded-xl h-1/2 text-xs'  onClick={()=>useKatikatiStore.setState({Bell: Bell - 1})}>
                            🔔🔻
                        </Chip>
                    </div>
                </div>
            </div>
            <input type="number" value={Rotate} onChange={(e)=>{
                useKatikatiStore.setState({Rotate:parseInt(e.target.value)});
                CalcAverage(Rotate,Bell,Cherry,StrongCherry,WaterMelon,StrongWaterMelon,ChanceA,ChanceB);
            }}/>
            </CardBody>
        </Card>
            
    )
}