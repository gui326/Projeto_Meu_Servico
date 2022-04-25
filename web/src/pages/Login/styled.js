import { Button } from "@mui/material";
import styled from "styled-components";

export const Area = styled.div` 
    display: flex;
    min-height:100vh;
    align-self: center;
    align-items: center;
    justify-content: center;
`; 

export const Card = styled.div` 
    display: flex;
    flex-direction: column;
`;

export const Titulo = styled.h1` 
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 0.05em;
    color: #E83151;
    margin: 0;
    padding-top: 1em;
`; 

export const Descricao = styled.p` 
    padding-top: 1em;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #6F6F6F;
    margin: 0;
`; 

export const BtnPrimary = styled(Button)` 
    background: #E83151!important;
    border-radius: 6px!important;
    font-weight: 500!important;
    font-size: 16px!important;
    line-height: 19px!important;
    letter-spacing: 0.05em!important;
    color: #FFFFFF!important;
    margin-bottom: 1em!important;
    height: 53px;
    text-transform: none!important;

    :hover{
        opacity: .6;
    }
`; 

export const BtnSecondary = styled(Button)` 
    border: 1px solid #E83151!important;
    border-radius: 6px!important;
    font-weight: 500!important;
    font-size: 16px!important;
    line-height: 19px!important;
    letter-spacing: 0.05em!important;
    color: #E83151!important;
    height: 53px;
    text-transform: none!important;

    :hover{
        opacity: .6;
    }
`;