import { View, Image } from "react-native";
import { Background, LogoArea, InfoArea, IconArea, Categoria, Pontuacao, Descricao, Titulo } from "./styled";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function CardPerfil(props){
    return(
        <Background>
            <LogoArea>
                <Image style={{ alignSelf: 'center', width: 55, height: 55 }} source={require('../../../assets/logoEmpresa.png')}/>
            </LogoArea>
            <InfoArea>
                <Titulo>
                    Eletromanik2
                </Titulo>
                <View style={{ marginVertical: 10, display: "flex", flexDirection: "row" }}>
                    <View style={{ marginRight: 12, display: "flex", flexDirection: "row" }}>
                        <MaterialCommunityIcons name="tag-text-outline" size={18} color="#868686" />
                        <Categoria>Eletricista</Categoria>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <AntDesign name="star" size={18} color="#E9E133" />
                        <Pontuacao>4,5</Pontuacao>
                    </View>
                </View>
                <Descricao>
                    Somos uma loja especializada em serviços eletrícos e estamos loucos para te atender.
                </Descricao>
            </InfoArea>
            <IconArea>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#B0A7A7" />
            </IconArea>
        </Background>
    )
}