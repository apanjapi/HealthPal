import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Align = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const BigText = styled.div`
font-size: 20px;
`

const SmallText = styled.div`
font-size: 15px;
`

const Space = styled.div`
margin 10px;
`

const Calculate = ({ goals = "number", meal = "number", left = "number"}) => {
    return (
        <Box>
            <Align>
                <BigText>{goals}</BigText>
                <SmallText>Goals</SmallText>
            </Align>
            <Space> + </Space>
            <Align>
                <BigText>{meal}</BigText>
                <SmallText>Meals</SmallText>
            </Align>
            <Space> = </Space>
            <Align>
                <BigText>{left}</BigText>
                <SmallText>Left</SmallText>
            </Align>
        </Box>
    );
};

export default Calculate;