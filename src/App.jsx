// // material ui sab kuch daal ke deta hai on compent 
// //material ui ka npm install karo link le lo chatgpt se ya materail ui

// import Button from '@mui/material/Button'; // material ui se liya compenrnt sec ke button se expand code karo
// import DeleteIcon from '@mui/icons-material/Delete'; // icon of delete ke liye 
// function App(){
//   let handleClick =() =>{
//     console.log("button was clicked");
//   }
//   return (
//     <>                
//                              {/* material ui se liya button sec se variant="contained"  */}
//     <h1>Material UI Demo </h1>
//     <Button disabled>Disabled</Button>
//     <Button variant="contained" onClick={handleClick}>Contained</Button>
//     <Button variant="contained" onClick={handleClick} color="success">Contained</Button> 
//     <Button variant="contained" onClick={handleClick} size="large" startIcon={<DeleteIcon />}>Contained</Button>
//     <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
//     </>
//   );
// }

// export default App;

//---- upr materail ui sikh liye ab project 

// import SearchBox from "./SearchBox";
// // import InfoBox from "./InfoBox";
// import InfoBox from "./InfoBox";
import "./App.css"
import WeatherApp from "./WeatherApp";


function App() {
  return (
    <>
    
      {/* <SearchBox />
      <InfoBox/> */}
      <WeatherApp/>

    </>
  );
}

export default App;
