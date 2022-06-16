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