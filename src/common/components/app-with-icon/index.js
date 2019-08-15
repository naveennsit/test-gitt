import React from 'react';
import styled from "styled-components";

const AppWithIcon =  React.memo((props) => {
    const Wrapper = styled.div`
display: flex;
align-items: center;
  border-bottom: 1px solid #ccc;

`;
    const Image = styled.img`
  width: 35px;
  padding: 5px;
  padding-left: 0;
`;
    const TitleText = styled.div`
font-size: 18px;
color: #666;
`;
    console.log(props.src)
    return (
        <Wrapper onClick={()=>props.onclick() || null}>
            <Image id="titleLogo" src={props.src}/>
            <TitleText>{props.title}</TitleText>
        </Wrapper>
    );
});

export default AppWithIcon;
