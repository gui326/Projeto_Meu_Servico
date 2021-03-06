import styled from "styled-components";

export const Header = styled.View` 
    display: flex;
    flex-direction: row;
    padding: 0 4%;
    padding-top: 45px;
    padding-bottom: 5px;
    background-color: #E83151;
`;

export const Area = styled.View` 
    background-color: #E83151;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 40px;
`;

export const Titulo = styled.Text` 
    font-weight: 500;
    font-size: 20px;
    flex: .95;
    line-height: 24px;
    color: #DBD4D3;
    text-align: center;
`;

export const LogoArea = styled.View` 
    align-self: center;
    border-radius: 50px!important;
    padding: 10px;
`;

export const Categoria = styled.Text` 
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    align-self: center;
    padding-left: 7px;
`;

export const Pontuacao = styled.Text` 
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    align-self: center;
    padding-left: 7px;
`;

export const Descricao = styled.Text` 
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    text-align: center;
`;
