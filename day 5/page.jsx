'use client'
import { useState , useEffect } from 'react'
import axios from 'axios';


const page = () => {
  const [weather, setWeather] = useState(null);



  const getWeather = async () => {

    try{
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: "London",
            appid: "a5d1daa82d451b1f57da9f2012e8c6ab",
            units: "metric",
          },
        },
      );

      setWeather(response.data);
      console.log(response.data);

    
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
    useEffect(() => {
      getWeather();
    },[])



 
  
  return (
    <div>

      <div>
        


      </div>
    </div>
  )
}

export default page
