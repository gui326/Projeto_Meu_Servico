import { SafeAreaView, ScrollView, TouchableOpacity, Text, Image, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Button, ButtonText, Titulo, Descricao } from "./styled";
import { useNavigation } from "@react-navigation/native";


export default function Contratado(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{  paddingTop: 40 }}
            >
                <Image
                style={{ width: 'auto', height: 345 }}
                source={require("../../../assets/contratado.png")} 
                />

                <Titulo>Serviço Foi contratado com sucesso!</Titulo>

                <Descricao>Aguarde o dia combinado para o serviço ser realizado, e qualquer problema, entre em contato com a gente :D</Descricao>

                <Button style={{ marginHorizontal: '4%', marginTop: 10 }}>
                    <ButtonText
                    onPress={() => navigation.reset({index: 0, routes: [{name: 'Pesquisa'}]})}
                    >
                        Ok
                    </ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}