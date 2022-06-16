import styled from "styled-components";

export const Area = styled.main` 
    background: var(--main-color);
    margin: 0;
    min-height: 100vh;
`;

export const CardArea = styled.div` 
    display: flex;
    gap: 20px;
`;

export const Card = styled.div` 
    padding: 1em;
    width: 220px;
    background: ${props => props.active ? "#e15e75" : "#FFFFFF"};
    box-shadow: ${props => props.active ? "3px 3px 10px #000000" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
    border-radius: 6px;
    cursor: pointer;

    svg{
        color: ${props => props.active ? "#FFFFFF" : "#544D4E"};
        font-size: 35px;
    }

    h3{
        margin: 0;
        color: ${props => props.active ? "#FFFFFF" : "#544D4E"};
        padding-top: .4em;
        align-self: center;
    }

    :hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, .7);
    }
`;

export const CardHidden = styled.div` 
    display: ${props => props.active ? "block" : "none"};
    padding: 1em;
    width: 220px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    cursor: pointer;
    transition: all 5s ease-out;

    svg{
        color: #544D4E;
        font-size: 35px;
    }

    h3{
        margin: 0;
        color: #544D4E;
        padding-top: .4em;
        align-self: center;
    }

    :hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, .7);
    }
`;