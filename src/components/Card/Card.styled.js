import styled from "styled-components";

export const Container = styled.section`

padding: 8px;
border-radius: 4px;
`;

export const Image = styled.img`
display: block;
width: 100%;
height: 240px;
object-fit: cover;
object-position:center;
border-radius: 4px;
`;

export const Box = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Price = styled.p`
font-size: 20px;
font-weight: 700;
color: green;

`;

export const Button = styled.button`
background-color: #C2FBD7;
border-radius: 50px;
border-width: 0;
box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
color: #008000;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;
font-family: Arial, sans-serif;
font-size: 1em;
height: 50px;

padding: 0 25px;
transition: all 200ms;
font-size: 14px;
font-weight: 700;
line-height: 1;

:hover {background-color: #AFE6C3;
transform: scale(1.05);}

`; 


export const Color = styled.p`
color: red;
font-size: 14px;
font-weight: 700;
line-height: 1;
`;
