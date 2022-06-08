import { useEffect, useState } from "react";

import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Titulo, Descricao, Valor, Button, ButtonText } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { adicionar_servico } from "../../store/modules/carrinho/actions";



export default function Servico(props){
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [service, setService] = useState({});
    const [company, setCompany] = useState({});

    const carrinho = () => {
        let dadosCarrinho = {
            servicoId: service?.id,
            empresaId: company?.id,
            empresaImage: company?.image,
            empresaNome: company?.name,
            empresaCategoria: "Eletricista",
            servicoNome: service?.name,
            servicoDescricao: service?.description,
            servicoValor: parseFloat(service?.price),
            servicoValorFormatado: service?.price,
            pagamento: "dinheiro"
        }

        dispatch(adicionar_servico(dadosCarrinho));

        navigation.navigate('Contratacao');
    }

    useEffect(() => {
        setService(props.route?.params?.service);
        setCompany(props.route?.params?.company);
    }, []);

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

                <Titulo>
                    {service?.name}
                </Titulo>

                <Descricao>
                    {service?.description}
                </Descricao>

                <Valor>
                    R$ {service?.price}
                </Valor>

                <Button
                onPress={() => carrinho()}
                >
                    <ButtonText>
                        Contratar
                    </ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}