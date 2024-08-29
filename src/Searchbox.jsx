import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './Searchbox.css'
import { useState } from 'react';

export default function Searchbox({upadteweather}){
    const API_URL='https://api.openweathermap.org/data/2.5/weather';
    const API_KEY='406aeb89378c327689327017c79dafff';

    let [type,setType]=useState('')
    let [error,seterrir]=useState(false)

    let weatherData= async ()=>{
        // console.log(`${API_URL}?q=${type}&appid=${API_KEY}`)
        try{
            seterrir(false)
            let response= await fetch(`${API_URL}?q=${type}&appid=${API_KEY}&units=metric`)
            let JsonResp= await response.json()
            let result={
                temp:JsonResp.main.temp,
                humidity:JsonResp.main.humidity,
                temp_min:JsonResp.main.temp_min,
                temp_max:JsonResp.main.temp_max,
                feels_like:JsonResp.main.feels_like,
                weather:JsonResp.weather[0].description,
                city:type
            }
            console.log(result)
            return result;
        }catch(err){
            throw err;
        }

        
        // if (result.weather.includes('cloud')){
        //     console.log('YES ITS CLOUDY')
        // }
    }


    let handleInput=(event)=>{
        setType(event.target.value)
    }

    let handleSubmit=async (event)=>{
        try{
            event.preventDefault()
            setType('')
            let res=await weatherData();
            upadteweather(res);
        }catch(err){
            seterrir(true);

        }
        

    }
    
    return (
        <div className='Searchbox'>
            <h2>Weahter Searcher</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={type} onChange={handleInput} required/>
                <br></br>
                <br></br>
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                    Search
                </Button>
            </form>
            {error ? <p style={{color:'red'}}>No such place exist</p> : null}

        </div>
    )
}