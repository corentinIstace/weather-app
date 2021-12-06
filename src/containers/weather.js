import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Form from "../components/Form";
import SingleWeather from "../components/SingleWeather";

export const Weather = () => {
    
    const [error, setError] = useState("")
    const [weather, setWeather] = useState(null);

    const days = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
    ];

    useEffect(() => {
        if(weather){
            console.log(weather);
        }

    }, [weather])

    return (
        <Container>
            <Form error = {error} setError= {setError} setWeather = {setWeather}></Form>
            {weather &&
            <ShowCity>
                <h2>Prévisions météo pour les 3 prochains jours à :</h2>
                <h1>{weather.location.name}</h1>
            </ShowCity>
            }
            <Display>
            {weather &&
                weather.forecast.forecastday.map((weatherDay) => {
                    return <SingleWeather 
                    day = {days[new Date(weatherDay.date).getDay()]}
                    key= {weatherDay.date} 
                    date={weatherDay.date} 
                    condition={weatherDay.day.condition}
                    minTemp={Math.round(weatherDay.day.mintemp_c)}
                    maxTemp={Math.round(weatherDay.day.maxtemp_c)}
                    ></SingleWeather>;
                })
            }
            </Display>
      </Container>
    )
}
const Container = styled.div`
  color: white;
  height: 100vh;
  width: 100vw;
  padding: 0em 6rem;
`;
const ShowCity = styled.div`
    text-align: center;
    margin-top: 50px;
    h2{
        padding-bottom: 30px;
    }
    h1{
        font-size: 2em;
    }
`;
const Display = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5rem;
`;

export default Weather;