import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
import './Infobox.css'
import Cloud from '@mui/icons-material/Cloud';

export default function InfoBox( {weat}){
    let result=weat;
    return (
        <div>
            <h1>Weather of {result.city}</h1>
            <div className="container">
                <div className="card">
                    <span className='weather'><h3>{result.weather}</h3></span>
                    <div className="Icon"> 
                    {
                        result.weather.toLowerCase().includes('haze') 
                        ? <DehazeIcon/> 
                        : result.weather.toLowerCase().includes('rain') || result.weather.toLowerCase().includes('thunderstrom')
                        ?  <ThunderstormIcon/> 
                        : result.weather.toLowerCase().includes('cloud') 
                        ? <CloudIcon/>
                        :result.weather.toLowerCase().includes('mist') || result.weather.toLowerCase().includes('wind')
                        ? <AirIcon/>
                        :null
                    }
                    </div>
                    
                    <div className="info">
                        <p>feels_like : {result.feels_like} &#8451;</p>
                        <p>humidity : {result.humidity}</p>
                        <p>temperature : {result.temp} &#8451; </p>
                        <p>min temperature  : {result.temp_min} &#8451;</p>
                        <p>max temperature : {result.temp_max} &#8451;</p>
                    </div>
                </div>
            </div>
        </div>
    )

}