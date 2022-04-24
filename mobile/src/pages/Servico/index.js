import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Titulo, Descricao, Valor, Button, ButtonText } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { adicionar_servico } from "../../store/modules/carrinho/actions";


export default function Servico(){
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const carrinho = () => {
        let dadosCarrinho = {
            servicoId: 3,
            servicoEmpresa: "Eletromanik",
            servicoCategoria: "Eletricista",
            servicoNome: "Troca de Lâmpada",
            servicoDescricao: "É feito a troca de lampâda na resiência do cliente. Com total cuidado e segurança, com total respeito as normas previstas.",
            servicoValor: 19.99,
            servicoValorFormatado: "R$ 19,99",
            pagamento: "dinheiro"
        }

        dispatch(adicionar_servico(dadosCarrinho));

        navigation.navigate('Contratacao');
    }

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
                    Troca de Lampada
                </Titulo>

                <Descricao>
                    É feito a troca de lampâda na resiência do cliente. Com total cuidado e segurança, com total respeito as normas previstas.
                </Descricao>

                <Valor>
                    RS 19,99
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