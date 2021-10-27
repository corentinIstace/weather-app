import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Form from "../components/Form";
import SingleWeather from "../components/SingleWeather";

export const Weather = () => {
    
    const [error, setError] = useState("")
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if(weather){
            console.log(weather);
        }
    }, [weather])

    return (
        <Container>
            <Form error = {error} setError= {setError} setWeather = {setWeather}></Form>
            <Display>
            {weather &&
                weather.forecast.forecastday.map((weatherDay) => {
                    return <SingleWeather 
                    key= {weatherDay.date} 
                    date={weatherDay.date} 
                    condition={weatherDay.day.condition}
                    minTemp={weatherDay.day.mintemp_c}
                    maxTemp={weatherDay.day.maxtemp_c}
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
  padding: 5rem 6rem;
  `;

const Display = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5rem;
`;

export default Weather;