import React from "react";
import styled from "styled-components";

const MainContainer = styled.div `
    background-color: lightgray;
    border: 2px solid black;
    border-radius: 15px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
`;

const SubContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

const Title = styled.h2`
    background-color: black;
    color: white;
    padding: 10px 0;
    margin: 15px 0 5px 0;
`;

const Text = styled.p`
    font-size: 1rem;
`;

const CardMaker = props => {
    console.log(props);
    return (
        <MainContainer>
            <Title>{props.data.name}</Title>
            <SubContainer>
                <Text>Birth Year: {props.data.birth_year}</Text>
                <Text>Gender: {props.data.gender}</Text>
            </SubContainer>
            <SubContainer>
                <Text>Height: {props.data.height} cm</Text>
                <Text>Weight: {props.data.mass} kg</Text>
            </SubContainer>
        </MainContainer>
    )
}

export default CardMaker;