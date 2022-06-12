import { useState, useEffect } from "react"; 
import { SafeAreaView, ScrollView, TouchableOpacity, View, Image } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Titulo, Categoria, Button, ButtonText, Topico, ServicoNome, 
    ServicoDescricao, TextoPrimario, TextoTotal, Trocar, TituloPrimario, SubtextoPrimario, OpcaoModal, TituloModal } from "./styled";
import { useNavigation } from "@react-navigation/native";
import MyModal from "../../components/MyModal";
import { useSelector } from "react-redux";
import api from "../../services/api";
import LoadingFull from "../../components/LoadingFull";


export default function Contratacao(){
    const navigation = useNavigation();
    const carrinho = useSelector(state => state.carrinho);
    const [modalVisible, setModalVisible] = useState(false);
    const [servicoInfo, setServicoInfo] = useState({});

    const userData = useSelector(state => state.users);
    const [ loadingFull, setLoadingFull]  = useState(false); 
    

    const apiOrderService = async () => {
        setLoadingFull(true);

        const newOrder = {
            CompanyId: servicoInfo.empresaId,
            ServiceId: servicoInfo.servicoId,
            price: servicoInfo.servicoValor + (servicoInfo.servicoValor / 10),
            paymentMethod: servicoInfo.pagamento
        }

        await api.post('/order', newOrder, {headers: {Authorization: `Bearer ${userData.token}`}})
        .then((response) => {
            console.log(response);
            navigation.navigate('Contratado');
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }
    
    useEffect(() => {
        setServicoInfo(carrinho);
    }, [])

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: '4%', paddingTop: 45 }}
            >
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="#DBD4D3" />
                </TouchableOpacity>

                <View style={{ marginTop: 20, display: "flex", flexDirection: 'row' }}>
                    <View style={{ flex: 2, alignSelf: 'center' }}>
                        <Image
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                        source={{uri: servicoInfo.empresaImage}} 
                        />
                    </View>
                    <View style={{ flex: 8, alignSelf: 'center' }}>
                        <Titulo>
                            {servicoInfo.empresaNome}
                        </Titulo>
                        <Categoria>
                            {servicoInfo.empresaCategoria}
                        </Categoria>
                    </View>
                </View>

                <Topico style={{ marginTop: 20, marginBottom: 7, borderBottomWidth: 1, borderBottomColor: '#c6c6c670', paddingBottom: 5 }}>
                    Serviço(s)
                </Topico>

                <ServicoNome>
                    {servicoInfo.servicoNome}
                </ServicoNome>
                <ServicoDescricao>
                    {servicoInfo.servicoDescricao}
                </ServicoDescricao>

                <Topico style={{ marginTop: 30, marginBottom: 7, borderBottomWidth: 1, borderBottomColor: '#c6c6c670', paddingBottom: 5 }}>
                    Resumo de valores
                </Topico>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextoPrimario>
                        Subtotal
                    </TextoPrimario>
                    <TextoPrimario>
                        R$ {servicoInfo.servicoValorFormatado}
                    </TextoPrimario>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextoPrimario>
                        Taxa de serviço
                    </TextoPrimario>
                    <TextoPrimario>
                        R$ {servicoInfo.servicoValor / 10}
                    </TextoPrimario>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextoTotal>
                        Total
                    </TextoTotal>
                    <TextoTotal>
                        R$ {servicoInfo.servicoValor + (servicoInfo.servicoValor / 10)}
                    </TextoTotal>
                </View>

                <Topico style={{ marginTop: 15, marginBottom: 7, borderBottomWidth: 1, borderBottomColor: '#c6c6c670', paddingBottom: 5 }}>
                    Agendamento
                </Topico>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
                    <Trocar>
                        Trocar
                    </Trocar>
                </View>

                <Topico style={{ marginTop: 30, marginBottom: 7, borderBottomWidth: 1, borderBottomColor: '#c6c6c670', paddingBottom: 5 }}>
                    Pagamento
                </Topico>

                <View style={{ marginBottom: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <FontAwesome5 
                        style={{ alignSelf: 'center', paddingRight: 13 }}
                        name={servicoInfo.pagamento === "dinheiro" ? "money-bill-alt" :"money-check"} size={19} color="#6B6B6B" />

                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <TituloPrimario>
                                {servicoInfo.pagamento === "dinheiro" ? "Dinheiro" : "Cartão"}
                            </TituloPrimario>
                            <SubtextoPrimario>
                                Pagamento realizado na hora do serviço
                            </SubtextoPrimario>
                        </View>
                    </View>
                    <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    >
                        <Trocar>
                            Trocar
                        </Trocar>
                    </TouchableOpacity>
                </View>

                <Button style={{ marginTop: 25 }}>
                    <ButtonText
                    onPress={() => apiOrderService()}
                    >
                        Fazer Contratação
                    </ButtonText>
                </Button>
            </ScrollView>

            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <TituloModal>
                    Selecione o metódo de pagamento
                </TituloModal>
                <TouchableOpacity
                onPress={() => {setServicoInfo({...servicoInfo, pagamento: "dinheiro"}), setModalVisible(false)}}
                >
                    <OpcaoModal>
                        Dinheiro
                    </OpcaoModal>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {setServicoInfo({...servicoInfo, pagamento: "cartao"}), setModalVisible(false)}}
                >
                    <OpcaoModal>
                        Cartão de crédito/débito
                    </OpcaoModal>
                </TouchableOpacity>
            </MyModal>

            <LoadingFull open={loadingFull}/>
        </SafeAreaView>
    )
}