import styled from "styled-components/native";

export const Area = styled.View` 
    background-color: #E83151;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const SubTitle = styled.Text` 
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    text-align: center;
`;

export const Title = styled.Text` 
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 30px;
`;

export const AreaInput = styled.View` 
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`;

export const Input = styled.TextInput` 
    background: white;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    padding-left: 60px;
`;
