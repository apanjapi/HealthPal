import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Title = styled.div`
font-size: 20px;
`

const Space = styled.div`
margin 10px;
`

const Response = ({ placeholder = "Title text", value = "text" }) => {
    return (
        <Box>
            <Title>{placeholder}</Title>
            <Space> : </Space>
            <Title>{value}</Title>
        </Box>
    );
};

export default Response;