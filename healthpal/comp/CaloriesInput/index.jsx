import styled from 'styled-components';
import React from 'react';


const Text = styled.div`
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 30px;
border-radius:10px;
cursor: pointer;
margin: 0 20px;
`


const CaloriesInput = ({
  title="Food +"
 
})=>{
  return<Button>
    <Text>{title}</Text>
    </Button>
  
}

export default CaloriesInput;