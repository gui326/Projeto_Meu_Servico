import styled from "styled-components";

export const Area = styled.main` 
    background: var(--main-color);
    margin: 0;
    min-height: 100vh;
`;

export const CardArea = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

export const Card = styled.div` 
    padding: 1em;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    cursor: pointer;

    h3{
        margin: 0;
        color: #544D4E;
        padding-top: .4em;
        align-self: center;
    }

    p{
        padding-bottom: 1em;
        padding-top: .5em;
        margin: 0;
        color: #544D4E;
    }

    span{
        font-weight: 700;
        font-size: 18px;
    }

    :hover{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, .7);
    }
`;

export const Title = styled.h1` 
    color: #FFFFFF;
    margin: 0;
    padding-bottom: .5em;
`;