import React from 'react'
import styled from 'styled-components'

const SingleWeather = ({date, condition, minTemp, maxTemp}) => {
    return (
            <Card>
                <CardDate>{date}</CardDate>
                <CardImg>
                    <h3>{condition.text}</h3>
                    <img src={condition.icon} alt={condition.text} />
                </CardImg>
                <CardTemp>
                    <p>min temp = {minTemp} °C</p>
                    <p>max temp = {maxTemp} °C</p>
                </CardTemp>
            </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex: 0 1 350px;
    flex-direction: column; 
    background-color: white;
    border-radius: 10px solid black;
    height: 450px;
    margin: 1rem;
`;
const CardDate = styled.h2`
    background-color: blue;
    text-align: center;
    flex: 1;
`;
const CardImg = styled.div`
    background-color: red;
    flex: 2;

`;
const CardTemp = styled.div`
    background-color: green;
    flex: 1;
    display: flex;
    justify-content: space-around;
`;
export default SingleWeather
