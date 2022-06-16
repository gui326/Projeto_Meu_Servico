import styled from "styled-components";

export const HeaderDrawer = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div{
        margin: 0;
        display: flex;
        align-self: center;
        align-items: center;
    }

    h4{
        color: var(--aux-color);
        font-size: 24px;
        padding-left: .5em;
        margin: 0;
        align-self: center;
        align-items: center;
    }

    svg{
        color: var(--aux-color);
    }
`;

export const MessagesArea = styled.div` 
    overflow-y: auto;
    height: ${window.innerHeight - 200}px;
    display: flex;
    flex-direction: column;
    padding: 0 1em;
`;

export const Message = styled.div` 
    max-width: 50%;
    align-self: ${props => props.isCompany ? "flex-end" : "flex-start"};
    padding: 1em 1.2em;
    border-radius: 22px;
    background: ${props => props.isCompany ? "#f9a5b490" : "#e0e0e090"};
    margin: .7em 0;
    float: right;
    text-align: ${props => props.isCompany ? "right" : "left"};
    
    span{
        color: var(--aux-color);
        font-size: 16px;
        font-weight: 500;
    }
`;