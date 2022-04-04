import { SafeAreaView, ScrollView, View, Image, TouchableOpacity } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Area, Titulo, LogoArea, Categoria, Pontuacao, Descricao } from "./styled";
import CardServico from "../../components/CardServico";
import { useNavigation } from "@react-navigation/native";


export default function Perfil(){
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <Area>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    >
                        <FontAwesome5 name="arrow-left" size={24} color="#DBD4D3" />
                    </TouchableOpacity>

                    <Titulo>Eletromanik</Titulo>

                    <LogoArea>
                        <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../../assets/miniLogoEmpresa.png")} />
                    </LogoArea>

                    <View style={{ marginVertical: 12, justifyContent: 'center', display: "flex", flexDirection: "row"}}>
                        <View style={{ marginRight: 15, display: "flex", flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="tag-text-outline" size={18} color="black" />
                            <Categoria>Eletricista</Categoria>
                        </View>
                        <View style={{ display: "flex", flexDirection: 'row' }}>
                            <AntDesign name="star" size={18} color="#E9E133" />
                            <Pontuacao>4,5</Pontuacao>
                        </View>
                    </View>

                    <Descricao>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Descricao>
                </Area>

                <View style={{ marginTop: 10, paddingHorizontal: '4%' }}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Servico')
                    }}
                    >
                        <CardServico />
                    </TouchableOpacity>

                    <CardServico />

                    <CardServico />

                    <CardServico />

                    <CardServico />

                    <CardServico />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}