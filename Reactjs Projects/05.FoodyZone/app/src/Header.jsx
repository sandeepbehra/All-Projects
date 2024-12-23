import React from 'react'
import styled from 'styled-components'

export const Header = (props) => {

  return (
    <>
      <Mainheader>
        <UpperHeader>
          <div className='foodyzone'>
            <img src='./images/fzpic.png' alt='fooodyzone'></img>
          </div>
          <div className='searchbar'>
            <input onChange={(e) => props.Searchfiltering(e)} type='text' placeholder='search food'>
            </input>
          </div>


        </UpperHeader>

        <LowerHeader>
          <div className='allbuttons'>
            <Button isSelected={props.filterbtn === "all"} onClick={() => props.BtnClickfiltering("all")}>All</Button>
            <Button isSelected={props.filterbtn === "breakfast"} onClick={() => props.BtnClickfiltering("breakfast")}>Breakfast</Button>
            <Button isSelected={props.filterbtn === "lunch"} onClick={() => props.BtnClickfiltering("lunch")}>Lunch</Button>
            <Button isSelected={props.filterbtn === "dinner"} onClick={() => props.BtnClickfiltering("dinner")}>Dinner</Button>
          </div>
        </LowerHeader>
      </Mainheader>

    </>
  )
}


const Mainheader = styled.div`
  width: 100vw;
 height: 141px;
 background-color: #221d1d;
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-direction: column;

`

const UpperHeader = styled.div`
 

 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 flex-direction: row;
 gap: 400px;
 @media(0 < width < 600px){
  flex-direction: column;
  height: 120px;
}
 
 
 .foodyzone{
  

 }

 .searchbar input{
   border-radius: 5px;
  width: 285px;
  height: 40px;
   border: 1px solid red;
   background-color: #141313;
   color: aliceblue;
   padding: 0 auto;
   
   & ::placeholder{
   color: #5f0808;
   }
 }


 
`

export const Button = styled.button`
  background-color: #e92f2f;
  background-color: ${(props) => (props.isSelected ? "#c40707" : "#e92f2f")};;
  outline: 1px solid ${(props) => (props.isSelected ? "#f7f1f1" : "#e92f2f")};
 
  color: aliceblue;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 2px;
  height: 19px;
  font-size: 13px;

  &:hover{
   background-color: #e40606;
   cursor: pointer;
  }
`

const LowerHeader = styled.div`
  .allbuttons{
  display: flex;
  gap: 5px;
}
`
