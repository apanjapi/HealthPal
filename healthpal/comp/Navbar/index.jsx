import styled from 'styled-components';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Container = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  height: 60px;
  background-color: #2C2CAA;
  border: 1px solid white;
`

const Cont1 = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid white;  
  background-color: grey;
`

const Cont2 = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fgd;
`

const Cont3 = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #agd;
`

const Cont4 = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #agg;
`

const Navbar = ({})=>{
  return <Container>
    <Cont1>
      <p>1111</p>
      <p>1111</p>
    </Cont1>
    <Cont2>
      <p>2222</p>
      <CgProfile />
    </Cont2>
    <Cont3>
      <p>3333</p>
    </Cont3>
    <Cont4>
      <p>4444</p>
      <p>4444</p>
    </Cont4>
  </Container>
}

export default Navbar;