import { View, Image } from "react-native";
import { Background, LogoArea, InfoArea, IconArea, Categoria, Pontuacao, Descricao, Titulo } from "./styled";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function CardPerfil(props){
    return(
        <Background>
            <LogoArea>
                <Image style={{ borderRadius: 50, alignSelf: 'center', width: 58, height: 58 }} source={{uri: props.item.image || 'https://ui-avatars.com/api/?name=Guilherme+Batista'}}/>
            </LogoArea>
            <InfoArea>
                <Titulo>
                    {props.item.name}
                </Titulo>
                <View style={{ marginVertical: 9, display: "flex", flexDirection: "row" }}>
                    <View style={{ marginRight: 12, display: "flex", flexDirection: "row" }}>
                        <MaterialCommunityIcons name="tag-text-outline" size={16} color="#868686" />
                        <Categoria>{props.item.Category.name}</Categoria>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <AntDesign name="star" size={16} color="#E9E133" />
                        <Pontuacao>4,5</Pontuacao>
                    </View>
                </View>
                <Descricao>
                    {props.item.resume}
                </Descricao>
            </InfoArea>
            <IconArea>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#B0A7A7" />
            </IconArea>
        </Background>
    )
}