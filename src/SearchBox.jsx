
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {

   let[city,setCity]= useState("");
   let[err,setError]=useState(false);

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";  // idhar se liya link = https://openweathermap.org/current?collection=current_forecast#geocoding
   const API_KEY = "bd4b92789cd22da711ede49364c25250";

   let getWeatherInfo = async()=>{   // () is ke andhar bhi hum pass kar sakte hai as parameter city wala
   try{
let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse= await response.json();
    console.log(jsonResponse);
    let result ={
      city:city,
      temp:jsonResponse.main.temp,
      tempmin:jsonResponse.main.temp_min,
      tempmax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelslike:jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description,

    }
    console.log(result);
    return result;

   }catch(err) {
    throw err;

  }
    
  }
    

    let handleChange = (evt)=>{
        setCity (evt.target.value);
    }

    let handleSubmit =async(evt)=>{
      try{
evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        setError(false);
        updateInfo(newinfo);

      }catch(err){
        setError(true);
      }
        
        
    }

  return (
    <div className="SearchBox">
      
      <form onSubmit={handleSubmit}>
       <TextField id="city" label="City Name" variant="outlined"value={city} onChange={handleChange} required/> <br/><br/> 
       <Button variant="contained" type="submit"> Send </Button>
       {err && <p style={{color:"red"}}>No such places</p>}
      </form>
    </div>
  );
}
