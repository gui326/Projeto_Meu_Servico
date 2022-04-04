import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import { Titulo, Descricao, Valor, Button, ButtonText } from "./styled";
import { useNavigation } from "@react-navigation/native";


export default function Servico(){
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

                <Titulo>
                    Troca de Lampada
                </Titulo>

                <Descricao>
                    É feito a troca de lampâda na resiência do cliente. Com total cuidado e segurança, com total respeito as normas previstas.
                </Descricao>

                <Valor>
                    RS 19,99
                </Valor>

                <Button
                onPress={() => navigation.navigate('Contratacao')}
                >
                    <ButtonText>
                        Contratar
                    </ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}