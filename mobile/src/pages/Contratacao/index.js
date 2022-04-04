import { SafeAreaView, ScrollView, TouchableOpacity, View, Image } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import { Titulo, Categoria, Valor, Button, ButtonText } from "./styled";
import { useNavigation } from "@react-navigation/native";


export default function Contratacao(){
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: '4%', paddingTop: 40 }}
            >
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <FontAwesome5 name="arrow-left" size={24} color="#DBD4D3" />
                </TouchableOpacity>

                <View style={{ marginTop: 25, display: "flex", flexDirection: 'row' }}>
                    <View style={{ flex: 2, alignSelf: 'center' }}>
                        <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../../assets/miniLogoEmpresa.png")} 
                        />
                    </View>
                    <View style={{ flex: 8, alignSelf: 'center' }}>
                        <Titulo>
                            Eletromanik
                        </Titulo>
                        <Categoria>
                            Eletricista
                        </Categoria>
                    </View>
                </View>

                <Valor>
                    RS 19,99
                </Valor>

                <Button>
                    <ButtonText>
                        Fazer Contratação
                    </ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}