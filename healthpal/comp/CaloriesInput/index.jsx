import styled from 'styled-components';
import React from 'react';


const Text = styled.h1`
margin-left:15px;

`

const Button = styled.button`
align-items: center;
justify-content: center;
width: 150px;
height: 70px;
border-radius:10px;
cursor: pointer;
margin: 20px;

`


const CaloriesInput = ({
  title="Food +"
 
})=>{
  return<Button>
    <Text>{title}</Text>
    </Button>
  
}

export default CaloriesInput;