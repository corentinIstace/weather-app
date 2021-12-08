import React, {useRef} from 'react'
import axios from 'axios';
import styled from 'styled-components';

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
            <SearchBar>
                <Input ref={inputRef} type="text" placeholder="Search"/>
                <Button onClick={onSubmitHandler}>Search</Button>
            </SearchBar>
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

const SearchBar = styled.div`
    width: 100%;
    max-width: 20rem;
    padding-top: 3rem;;
    display: flex;
    flex-direction:column;
`;

const Input = styled.input`
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 5px;
    &:focus{
        outline: none;
    };
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 20px;;
    padding: 0.5rem 1rem;
    /* width: 10vw; */
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    outline: none;
    background-color: #65737e;
    cursor: pointer;
    &:hover{
        background-color:#4f5b66;
    }
`;

const Err = styled.div`
    margin-top: 15px;
    color: red;
    font-style: italic;
`;
export default Form
