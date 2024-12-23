import React from 'react';

import styled from "styled-components";

const StartGame = (props) => {
  return (
    <>
    <Container>
    <div>
        <img src='images/dices.png'/>
    </div>
    <div className='rightDiv'>
        
            <h1>DICE GAME</h1>
         
            <Button onClick={props.doStart}>Play Now</Button>
        
    </div>
    </Container>
    </>
  )
}

export default StartGame;

const Container = styled.div`
  display  : flex;
  justify-content:space-evenly;
  flex-direction: row;
  align-items: center;

  .rightDiv{
    
   
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 528px;
    height: 188px;
    gap:0px;
   

  }
  .rightDiv h1{
    font-size: 65px;
    white-space: nowrap;
  }


`;





const Button = styled.button`
background-color : #1d1a1a;
color : white;
width: 150px;
height: 50px;
border: 1px solid transparent;
cursor: pointer;
border-radius: 2px;
transition: 0.4s background ease-in;

&:hover{
background-color: white;
border: 1px solid black;
color :  black;
transition: 0.3s background ease-in;
}


`;