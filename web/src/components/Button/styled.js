import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonCustom = styled(Button)` 
    background: var(--main-color)!important;
    border-radius: 50px!important;
    text-transform: none!important;
    padding: .7em 2em!important;
    font-weight: 700!important;

    :hover{
        opacity: .6;
    }
`;