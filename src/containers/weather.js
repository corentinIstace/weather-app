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
    background-color: #0093E9;
    background-image: linear-gradient(180deg, #0093E9 0%, #1e8bca 50%, #80D0C7 100%);
    color: white;
    width: 100vw;
    min-width: 100%;
    min-height: 100vh;
    padding: 0em 3rem;
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