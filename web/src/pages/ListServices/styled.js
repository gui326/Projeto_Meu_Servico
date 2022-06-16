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
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    position: relative;
    overflow: hidden;

    :hover{
        div{
            display: flex;
        }
    }

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

export const AreaActions = styled.div` 
    display: none;
    background: #000000C0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-self: center;
    justify-content: center;
    align-items: center;

    svg{
        color: white;
    }
`;

export const Title = styled.h1` 
    color: #FFFFFF;
    margin: 0;
    padding-bottom: .5em;
`;