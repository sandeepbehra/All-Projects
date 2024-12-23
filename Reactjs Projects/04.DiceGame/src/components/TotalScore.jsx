import styled from "styled-components"


export const TotalScore = () => {
  return (
    <Total>
        <h1>0</h1>
        <p>Total score</p>
    </Total>
  )
}

const Total = styled.div`
max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }

`