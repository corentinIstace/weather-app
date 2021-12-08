import React from 'react';
import styled from 'styled-components';
import cold from '../img/cold.jpg';
import hot from '../img/sun.jpg';

const SingleWeather = ({date, condition, minTemp, maxTemp, day}) => {
    return (
            <Card>
                <CardDate>
                    <h2>{day},</h2>
                    <h2>{date}</h2>
                </CardDate>
                <CardImg minTemp={minTemp}>
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
    border-radius: 10px;
    height: 350px;
    margin: 0rem 2rem;
    margin-bottom: 4rem;
    /* padding: 2rem; */
    box-shadow: 8px 10px 10px rgb(0 0 0 / 30%);
    &:hover{
        transform: scale3d(1.1, 1.1, 1.1);
        box-shadow:  0 0 3em rgb(0 0 0 / 30%);
        transition: 0.5s ease;
}
`;
const CardDate = styled.div`
    text-align: center;
    background-color: rgba(52,61,70, 0.4) ;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 1rem;
    flex: 1;
    h2{
        padding: 5px;
    }
    `;

const CardImg = styled.div`
    background: ${({minTemp})=> {
        return minTemp < 23 ? `url(${cold})` : `url(${hot})`}
    };     
    background-position: bottom;
    text-align: center;
    padding-top: 10px;
    flex: 2;
    p{
     padding-top: 20px;
    }
    img{
      padding-top: 30px;
    }
`;

const CardTemp = styled.div`
    background-color: rgba(52,61,70, 0.4) ;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 1rem;
    padding-top: 10px;
    display: flex;
    justify-content: space-evenly;
    flex: 0.7;
`;

export default SingleWeather
