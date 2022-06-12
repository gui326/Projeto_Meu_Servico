import styled from "styled-components/native";

export const Background = styled.View` 
    border-radius: 6px!important;
    overflow: hidden;
    padding: 15px 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;

    border: 1px solid #C6C6C680;
`;

export const InfoArea = styled.View` 
    flex: 1;
`;

export const Divider = styled.View` 
    margin-top: 14px;
    height: 1px;
    width: 100%;
    background: #C6C6C640;
`;

export const Categoria = styled.Text` 
    margin-left: 13px;
    color: #C6C6C6;
`;

export const IconArea = styled.View` 
    flex: 2;
    align-items: flex-end;
    align-self: center;

`;

export const Titulo = styled.Text`
    font-weight: 700;
    font-size: 16px;
    color: #737373;
    align-self: center;
    margin-left: 12px;
`;

export const Info = styled.Text` 
    font-weight: 500;
    font-size: 14px;
    color: #483C3C;
    margin-left: 8px;
`;

export const Servico = styled.Text` 
    font-weight: 400;
    font-size: 13px;
    color: #817A7A;
`;
