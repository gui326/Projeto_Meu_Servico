import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import CardPedido from "../../components/CardPedido";
import Header from "../../components/Header";

export default function Servicos(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Header titulo="Serviços"/>

            <ScrollView
            style={{ paddingHorizontal: '1%', paddingTop: 5, paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Pedido')}
                >
                    <CardPedido />
                </TouchableOpacity>

                <CardPedido />

                <CardPedido />

                <CardPedido />

                <CardPedido />
                
                <CardPedido />

                <CardPedido />

                <CardPedido />
                
            </ScrollView>
        </SafeAreaView>
    )
}