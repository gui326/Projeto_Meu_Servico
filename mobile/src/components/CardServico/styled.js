import styled from "styled-components/native";

export const Background = styled.View` 
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    border: 1px solid #E0E0E0;
    padding: 4.5% 3%;
    margin-bottom: 10px;
    min-height: 100px;
`;

export const InfoArea = styled.View` 
    flex: 8;
    align-self: center;
`;

export const Titulo = styled.Text` 
    font-weight: 700;
    font-size: 16px;
    color: #5B5B5B;
    margin: 0;
    padding-bottom: 5px;
`;

export const Descricao = styled.Text` 
    font-weight: 400;
    font-size: 13px;
    color: #A9A9A9;
    margin: 0;
`;

export const ValorArea = styled.View` 
    display: flex;
    flex: 2;
    align-items: center;
    align-self: center;
`;

export const Valor = styled.Text` 
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #5B5B5B;
`;
