import styled from "styled-components/native";

export const Titulo = styled.Text` 
    font-weight: 700;
    font-size: 28px;
    color: #e83151;
    margin: 20px 0;
`;

export const Descricao = styled.Text` 
    font-size: 16px;
    font-weight: 300;
    color: #6F6F6F;
    margin-bottom: 10px;
`;

export const Label = styled.Text` 
    color: #AAAAAA;
    font-size: 16px;
    font-weight: 300;
    margin-top: 20px;
`;

export const Info = styled.Text` 
    text-align: center;
    color: #6E6E6E;
    margin: 20px 0;
`;

export const Button = styled.TouchableOpacity`
    height: 63px;
    background: #E83151;
    border-radius: 6px;
    justify-content: center;
    margin-bottom: 55px;
`;

export const ButtonText = styled.Text` 
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 18px;
`;

export const AreaInput = styled.View` 
    height: 55px;
    flex: 1;
    flex-direction: row;
`;

export const IconArea = styled.View` 
    position: absolute;
    bottom: 15px;
`;

export const Input = styled.TextInput.attrs(({ativo}) => ({
    borderBottomWidth: 1,
    borderColor: ativo ? "#E83151" : "#AAAAAA"
}))` 
    font-size: 16px;
    padding-left: 35px;
    width: 100%;
`;