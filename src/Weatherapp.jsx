import Searchbox from './Searchbox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function Weatherapp(){
    let [weat,setweat]=useState({
        feels_like: 0,
        humidity: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        weather: "--",
        city:"--"
    })

    let upadteweather=(result)=>{
        setweat(result)
    }
    return (
        <>
            <Searchbox upadteweather={upadteweather}/>
            <InfoBox weat={weat}/>
        </>
    )
}