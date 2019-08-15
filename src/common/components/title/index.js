import React from 'react';
import styled from "styled-components";
const TitleText = React.memo((props) => {
    const Title = styled.div`
  font-size: 20px;
  color: rgb(237,28,36);
  padding-bottom: 2px;
  border-bottom: 1px solid rgb(204, 204, 204);
  width: 100%;
`
    return (
        <Title>{props.text}</Title>
    );
});

export default TitleText;
