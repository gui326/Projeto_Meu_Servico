import { Image } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import { Background, LogoArea, InfoArea, Titulo, Tipo, Ultima, IconArea } from "./styled";


export default function CardChat(){
    return(
        <Background>
            <LogoArea>
                <Image source={require("../../../assets/miniLogoEmpresa.png")} style={{ width: 45, height: 45 }}/>
            </LogoArea>
            <InfoArea>
                <Titulo>
                    Eletromanik
                </Titulo>
                <Tipo>
                    Pedido
                </Tipo>
                <Ultima>
                    ultima mensagem 20/03/2022 19:47
                </Ultima>
            </InfoArea>
            <IconArea>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#B0A7A7" />
            </IconArea>
        </Background>
    );
}