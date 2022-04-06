import { SafeAreaView, ScrollView, TouchableOpacity, View, Image } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Titulo, Categoria, Topico, ServicoNome, 
    ServicoDescricao, TextoPrimario, TextoTotal, TituloPrimario, SubtextoPrimario } from "./styled";
import { useNavigation } from "@react-navigation/native";


export default function Pedido(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: '4%', paddingTop: 40 }}
            >
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="#DBD4D3" />
                </TouchableOpacity>

                <View style={{ marginTop: 25, display: "flex", flexDirection: 'row' }}>
                    <View style={{ flex: 2, alignSelf: 'center' }}>
                        <Image
                        style={{ width: 45, height: 45 }}
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

                <Topico style={{ marginTop: 20, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                    Serviço(s)
                </Topico>

                <ServicoNome>
                    Troca de Lâmpada
                </ServicoNome>
                <ServicoDescricao>
                    Realização da troca de lâmpada da dona de casa
                </ServicoDescricao>

                <Topico style={{ marginTop: 10, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                    Resumo de valores
                </Topico>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextoPrimario>
                        Subtotal
                    </TextoPrimario>
                    <TextoPrimario>
                        R$ 19,99
                    </TextoPrimario>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextoPrimario>
                        Taxa de serviço
                    </TextoPrimario>
                    <TextoPrimario>
                        R$ 10,00
                    </TextoPrimario>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextoTotal>
                        Total
                    </TextoTotal>
                    <TextoTotal>
                        R$ 29,99
                    </TextoTotal>
                </View>

                <Topico style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                    Agendamento
                </Topico>

                
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <AntDesign style={{ alignSelf: 'center', paddingRight: 13 }} name="calendar" size={24} color="#6B6B6B" />
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <TituloPrimario>
                            Dia 07/05/2022
                        </TituloPrimario>
                        <SubtextoPrimario>
                            17:50 ~ 18:00
                        </SubtextoPrimario>
                    </View>
                </View>
                    

                <Topico style={{ marginTop: 15, marginBottom: 15, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                    Pagamento
                </Topico>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesome5 
                    style={{ alignSelf: 'center', paddingRight: 13 }}
                    name="money-check" size={19} color="#6B6B6B" />

                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <TituloPrimario>
                            Cartão
                        </TituloPrimario>
                        <SubtextoPrimario>
                            Pagamento realizado na hora do serviço
                        </SubtextoPrimario>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}