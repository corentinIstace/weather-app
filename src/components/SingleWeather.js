import React from 'react'
import styled from 'styled-components'

const SingleWeather = ({date, condition, minTemp, maxTemp}) => {
    const getDay = (jj) => {
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        let day = days[jj.getDay()];

        return `${day}`;
    }
    return (
            <Card>
                <CardDate>
                    <h2>{getDay(new Date())},</h2>
                    <h2>{date}</h2>
                </CardDate>
                <CardImg>
                    <img src={condition.icon} alt={condition.text} />
                    <h3>{condition.text}</h3>
                </CardImg>
                <CardTemp>
                    <p>min t° = {minTemp} °C</p>
                    <p>max t° = {maxTemp} °C</p>
                </CardTemp>
            </Card>
    )
}

const Card = styled.section`
    display: flex;
    flex: 0 1 250px;
    flex-direction: column; 
    border: 2px solid grey;
    border-radius: 10px;
    height: 350px;
    margin: 0rem 2rem;
    &:hover{
    transform: scale3d(1.1, 1.1, 1.1);
}
`;
const CardDate = styled.div`
    background-color: blue;
    text-align: center;
    background-color: #343d46;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    flex: 1;
    h2{
        padding: 5px;
    }
`;
const CardImg = styled.div`
    background-color: #4f5b66;
    text-align: center;
    padding-top: 10px;
    flex: 2;

`;
const CardTemp = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #65737e;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-top: 10px;
    flex: 0.7;
`;
export default SingleWeather
