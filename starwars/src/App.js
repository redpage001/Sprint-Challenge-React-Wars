import React from 'react';
import './App.css';
import CardData from "./components/CardData";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Header = styled.h1`
    background-color: black;
    color: white;
    padding: 10px 0;
    font-size: 4rem;
  `;

  const PageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 30px;
  `;
  
  return (
    <div className="App">
      <Header>React Wars</Header>
      <PageContainer>
        <CardData/>
      </PageContainer>
    </div>
  );
}

export default App;
