import React from 'react';
import styled from "styled-components";

export const Container = styled.div`
width: 80%;
margin: 0 auto;
padding-top: 10px;
`;

export const Error = styled.span`
   color: #9f3a38;
   font-size: 10px;
   
`;
export const Button = styled.button`
background-color: ${props => props.primary ? "white" : "palevioletred"};
color: white;
padding: 10px 40px;
border-radius: 5px;
border: 1px solid #aaaaaa;
&:focus{
 border: none;
 outline: none 0;
}
`;

export const DangerButton = styled(Button)`
background-color: darkred;
`;

export const SaveButton = styled(Button)`
background-color: green;
`;
