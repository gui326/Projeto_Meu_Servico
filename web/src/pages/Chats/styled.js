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

    div{
        margin: 0;
        display: flex;
        align-self: center;
        align-items: center;
        gap: 10px;
        padding-bottom: .5em;
    }

    svg{
        color: grey;
        font-size: 7px;
    }

    h3{
        font-size: 16px;
        padding-bottom: 1em;
        margin: 0;
        color: var(--aux-color);
        padding-top: .4em;
        align-self: center;
    }

    h6{
        font-size: 14px;
        color: var(--aux-color);
        margin: 0;
    }

    p{
        font-size: 16px;
        margin: 0;
        font-weight: 700;
        color: var(--aux-color);
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