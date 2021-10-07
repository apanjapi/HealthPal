import styled from 'styled-components';
import React, { useState } from 'react';
import router, {useRouter} from 'next/router';

const Container = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  border: 1px solid white;
`

const Cont1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;  
  background-color: ${props=>props.bgcolor};
`

const Cont2 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  background-color: ${props=>props.bgcolor};
`

const Cont3 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.bgcolor};
`

const Cont4 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  background-color: ${props=>props.bgcolor};
`

const imgBox = styled.img`
  width: 10px;
  heigth: 10px;
`

const Navbar = ({
  bgcolor="#fad",
})=>{

  const [countit1, setCountit1] = useState(0);
  if (countit1 === 1){
    bgcolor="#328046"
  }
  else if (countit1 === 0){
    bgcolor="#fad"
  }
  else if (countit1 > 1){
    console.log("condition met")
    setCountit1(0)
    bgcolor="#fad"
  }

  const [countit2, setCountit2] = useState(0);
  if (countit2 === 0){
    bgcolor="#fad"
  }
  else if (countit2 === 1){
    bgcolor="#328046"
  }
  else if (countit2 > 1){
    setCountit2(0)
    bgcolor="#fad"
  }

  return <Container>
    <Cont1 onClick={() => {
        router.push("/");
        console.log(countit1);
        setCountit1(countit1 + 1);
    }}>
      <img src="https://placekitten.com/30/30" />
      <p>Info.</p>
    </Cont1>
    <Cont2 onClick={()=>router.push("/record")}>
      <img src="https://placekitten.com/30/30" />
      <p>Record</p>
    </Cont2>
    <Cont3 onClick={()=>router.push("/tracking")}>
      <img src="https://placekitten.com/30/30" />
      <p>Tracking</p>
    </Cont3>
    <Cont4 onClick={()=>router.push("/profile")}>
      <img src="https://placekitten.com/30/30" />
      <p>Profile</p>
    </Cont4>
  </Container>
}

export default Navbar;