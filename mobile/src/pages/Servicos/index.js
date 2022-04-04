import { SafeAreaView, ScrollView } from "react-native";
import CardPedido from "../../components/CardPedido";
import Header from "../../components/Header";

export default function Servicos(){
    return(
        <SafeAreaView>
            <Header titulo="Serviços"/>

            <ScrollView
            style={{ paddingHorizontal: '4%', paddingTop: 15, paddingBottom: 50, marginBottom: 90 }}
            showsVerticalScrollIndicator={false}
            >

                <CardPedido />

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