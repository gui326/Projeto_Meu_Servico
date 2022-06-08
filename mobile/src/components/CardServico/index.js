import { Background, InfoArea, Titulo, Descricao, ValorArea, Valor } from "./styled";

export default function CardServico(props){
    return(
        <Background>
            <InfoArea>
                <Titulo>
                    {props.item.name}
                </Titulo>
                <Descricao>
                    {props.item.description}
                </Descricao>
            </InfoArea>
            <ValorArea>
                <Valor>R$ {props.item.price}</Valor>
            </ValorArea>
        </Background>
    )
}