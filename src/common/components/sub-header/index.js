import React from 'react';
import styled from "styled-components";

const SubHeader = (props) => {
    const Wrapper = styled.div`
display: flex;
background-color: #F0F0F0;
border-bottom:  1px solid #e5e5e5;
font-size: 18px;
padding: 10px 50px;
color: #000000;

`
    return (
        <Wrapper>{props.title || "DTH Installation and Service: Agencies"}</Wrapper>
    );
};

export default SubHeader;
