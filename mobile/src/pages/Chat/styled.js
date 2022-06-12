import styled from "styled-components/native";

export const Header = styled.View` 
    background-color: #E83151;
    display: flex;
    flex-direction: row;
    padding-top: 8%;
    padding-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
`;

export const Empresa = styled.Text` 
    font-weight: 700;
    font-size: 16px;
    color: white;
    margin-top: 0;
`;

export const NomeServico = styled.Text` 
    font-weight: 500;
    font-size: 12px;
    color: white;
`;

export const MessageArea = styled.View` 
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.cliente ? "flex-end" : "flex-start"};
`;

export const MessageChat = styled.View` 
    max-width: 60%; 
    background-color: ${props => props.cliente ? "#B15C6B40" : "#F0F0F0"};
    padding: 17px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: ${props => props.cliente ? "0" : "15px"};
    border-bottom-left-radius: ${props => props.cliente ? "15px" : "0"};
`;

export const Message = styled.Text` 
    font-size: 14px;
    line-height: 19px;
    color: #101010A0;
`;

export const Data = styled.Text` 
    font-size: 6px;
    position: absolute;
    bottom: 25%;
    right: 15px;
    min-width: 100%;
    left: 0;
    text-align: right;
    color: grey;
`;

export const Input = styled.TextInput` 
    border: 1px solid #E83151;
    height: 50px;
    border-radius: 12px;
    padding: 0 10px;
    flex: 7;
`;

export const Button = styled.TouchableOpacity`
    margin-left: 10px;
    flex: 3;
    background-color: #E83151;
    border-radius: 12px;
    justify-content: center;
`;

export const ButtonText = styled.Text` 
    text-align: center;
    font-size: 14px;
    color: white;
    font-weight: 700;
`;

