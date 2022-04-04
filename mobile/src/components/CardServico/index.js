import { Background, InfoArea, Titulo, Descricao, ValorArea, Valor } from "./styled";

export default function CardServico(){
    return(
        <Background>
            <InfoArea>
                <Titulo>
                    Troca de lampada
                </Titulo>
                <Descricao>
                    É feito a troca de lampâda na residência do cliente, com total cuidado e segurança, seguindo as normas.
                </Descricao>
            </InfoArea>
            <ValorArea>
                <Valor>R$ 19,99</Valor>
            </ValorArea>
        </Background>
    )
}