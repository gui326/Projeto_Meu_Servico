import { View, Image } from "react-native";
import { Background, InfoArea, IconArea, Titulo, Servico, Info } from "./styled";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function CardPedido(prop){
    return(
        <Background>
            <InfoArea>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={{uri: prop.item.Company.image}} />
                    <Titulo>{prop.item.Company.name}</Titulo>
                </View>
                <View style={{ display: "flex", flexDirection: "row", marginVertical: 12, paddingLeft: 8 }}>
                    <FontAwesome5 
                    name="check-circle" size={17} color="#31A91E" />
                    <Info>
                        Serviço {prop.item.status} - #{prop.item.id}
                    </Info>
                </View>
                <Servico>
                    - {prop.item.ServiceId} {prop.item.Service.name}
                </Servico>
            </InfoArea>
            <IconArea>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#B0A7A7" />
            </IconArea>
        </Background>
    );
}