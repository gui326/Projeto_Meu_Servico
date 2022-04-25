import styled from "styled-components";

export const Area = styled.header` 
    display: flex;
    height: 120px;
`; 

export const Fixed = styled.div` 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1em;
`;

export const LogoArea = styled.div` 
    display: flex;

    h4{
        margin: 0;
        align-self: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;
        padding-left: 1em;
        color: #FFFFFF;
    }

    img{
        cursor: pointer;
    }
`; 

export const InfoArea = styled.div` 
    display: flex;
    align-items: center;

    svg{
        color: white;
        font-size: 50px;
        padding-left: .5em;
        cursor: pointer;

        :hover{
            opacity: .6;
        }
    }

    div{
        display: flex;
        flex-direction: column;
    }

    h3{
        color: white;
        margin: 0;
    }

    p{
        color: white;
        margin: 0;
    }

`;