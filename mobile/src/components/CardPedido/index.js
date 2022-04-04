import { View, Image } from "react-native";
import { Background, InfoArea, IconArea, Titulo, Servico, Info } from "./styled";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function CardPedido(){
    return(
        <Background>
            <InfoArea>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={require("../../../assets/miniLogoEmpresa.png")} />
                    <Titulo>Eletromanik</Titulo>
                </View>
                <View style={{ display: "flex", flexDirection: "row", marginVertical: 5 }}>
                    <FontAwesome5 
                    style={{ marginLeft: 5 }}
                    name="check-circle" size={15} color="#31A91E" />
                    <Info>
                        Serviço realizado - Serviço #341230
                    </Info>
                </View>
                <Servico>
                    - Troca de fiação
                </Servico>
            </InfoArea>
            <IconArea>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#B0A7A7" />
            </IconArea>
        </Background>
    );
}