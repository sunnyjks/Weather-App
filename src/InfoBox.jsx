// import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions'; button niche se hata diya
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import "./InfoBox.css";

// export default function InfoBox({info}){
//     const INIT_URL ="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee "
//     // let info={
//     //     feelslike:24.84,
//     //     temp:25.05,
//     //     tempMin:25.05,
//     //     humidity:47,
//     //     weather:"haze",
//     //     city:"delhi",
//     // };

//     // chatgpt se liya ye link
//     const HOT_URL =
//   "https://images.unsplash.com/photo-1501973801540-537f08ccae7b";

// const COLD_URL =
//   "https://images.unsplash.com/photo-1608889175638-9322300c5f2d";

// const RAIN_URL =
//   "https://images.unsplash.com/photo-1501696461415-6bd6660c6742";


//     return (
//     <div className="InfoBox">
//         {/* <h1> Weather Info - {info.weather}</h1> */}
//         <div className='cardContainer'>
//         {/* ye card section material ui se liya  below code bas image insert kiya*/}
//          <Card sx={{ maxWidth: 345 }} className="weatherCard">
//       <CardMedia
//         sx={{ height: 180 }}
//         image ={info.humidity >80 ? RAIN_URL : (info.temp > 15 )? HOT_URL: COLD_URL}
//         // image="/static/images/cards/contemplative-reptile.jpg"
//         // image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
//         // ya image aise toh 
//         //  image ={INIT_URL}
//         title="green iguana"
//       />
//       <CardContent className='card-below'>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
//           <div className='weather-info'>
//           <div >Temperature={info.temp}&deg;C</div>
//           <div>Humidity={info.humidity}</div>
//            <div>feelslike={info.feelslike}</div>
//             <div>weather={info.humidity}</div>
//             </div>
//         </Typography>
//       </CardContent>
      
//     </Card>
//     </div>
//     </div>
//     )
// }
























//chatgpt





import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiDaySunny,
} from "react-icons/wi";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "hot.jpg";
  const COLD_URL =
    "cold.jpg";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1501696461415-6bd6660c6742";

  const tempClass =
    info.temp >= 30 ? "hot" : info.temp <= 15 ? "cold" : "normal";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }} className="weatherCard">
          <CardMedia
            sx={{ height: 180 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />

          <CardContent className="card-below">
            <Typography variant="h5" className="city">
              {info.city}
            </Typography>

            <div className={`weather-info ${tempClass}`}>
              <div>
                <WiThermometer className="icon temp" />
                <span>Temperature</span>
                <span>{info.temp}°C</span>
              </div>

              <div>
                <WiHumidity className="icon humidity" />
                <span>Humidity</span>
                <span>{info.humidity}%</span>
              </div>

              <div>
                <WiStrongWind className="icon feels" />
                <span>Feels Like</span>
                <span>{info.feelslike}°C</span>
              </div>

              <div>
                <WiDaySunny className="icon weather" />
                <span>Weather</span>
                <span>{info.weather}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
