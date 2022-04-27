import { TextField } from "@mui/material";
import styled from "styled-components";

export const PatternInput = styled(TextField)` 
    .css-gjbq6i-MuiInputBase-root-MuiFilledInput-root:after{
        border-color: #E83151!important;
    }

    input {
        padding-left: 2em;
    }
`;

export const Area = styled.div` 
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;

    svg{
        position: absolute;
        bottom: ${props => props.iconePosicao || "0.3em"};
        color: #a9a9a9;
    }
`;