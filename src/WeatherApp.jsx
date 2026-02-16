import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] =useState({
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        humidity:47,
        weather:"haze",
        city:"delhi",
    });


    let updateInfo =(newinfo)=>{
         setWeatherInfo(newinfo);
    }

    return(
    <div style={{textalign:"center"}}>
        <h2>Weather App By Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    )
}