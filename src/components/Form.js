import React, {useRef} from 'react'
import axios from 'axios';
import styled from 'styled-components';
Content-Security-Policy: default-src 'none';

const Form = ({error, setError, setWeather}) => {
    const onSubmitHandler = async() => {
        try{
            const city = inputRef.current.value;
            const response = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`                
                );
            setWeather(response.data);
            setError("");
        }
        catch(err){
            setError("Sorry this country doens't exist in our database.");
        }
    };
    const inputRef = useRef(null);

    return (
        <>
        <Container>
            <div>
            <Input ref={inputRef} type="text" />
            <Button onClick={onSubmitHandler}>Search</Button>
            </div>
            <Err>
            {error && <p>{error}</p>}
            </Err>
      </Container>
      </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 0;
    &:focus{
        outline: none;
    };
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    background-color: grey;
    border-radius: 0;
`;

const Err = styled.div`
    margin-top: 15px;
    color: red;
    font-style: italic;
`;
export default Form
