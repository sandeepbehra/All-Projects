import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from './App'
import { Button } from './Header'

export const Mainsection = ({ data: food }) => {
    return (
        <>
            <SectionContainer>
                <FoodCards>
                    {
                        food?.map(({ name, price, text, image }) =>
                            <FoodCard key={name}>
                                <div className='Cardimage'>
                                    <img src={BASE_URL + image}></img>
                                </div>
                                <div className='Cardinfo'>
                                    <h3>{name}</h3>
                                    <p>{
                                        text
                                    }</p>
                                    <div className='info'>

                                        <Button>${price.toFixed(2)}</Button>
                                    </div>

                                </div>
                            </FoodCard>
                        )
                    }
                </FoodCards>
            </SectionContainer>
        </>
    )
}


const SectionContainer = styled.div`
background-image: url('images/bgpic.png');
min-height: calc(100vh - 141px);
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

`

const FoodCards = styled.div`
   display : flex ;
   flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  
  padding-left: 120px;

  .Cardinfo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   

  }
 
`

const FoodCard = styled.div`
 display : flex ;
 flex-direction: row;
 padding-top: 10px;
width: 340px;
height: 167px;
gap: 0px;
border-radius: 19.45px 0px 0px 0px;
border: 0.66px 0px 0px 0px;
opacity: 0px;



background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) ;

border: 0.66px solid;

border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) ,
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) ;

backdrop-filter: blur(26.368392944335938px)


`