import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from "react-native";
import CardPedido from "../../components/CardPedido";
import Header from "../../components/Header";

import api from "../../services/api";
import { useSelector } from "react-redux";


export default function Servicos(){
    const navigation = useNavigation();
    const userData = useSelector(state => state.users);
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        setLoading(true);

        await api
        .get(`/order`, {headers: { authorization: `Bearer ${userData.token}` }})
        .then((response) => {
            console.log(response.data);
            setOrders(response.data);
        })
        .catch((error) => {
            alert(error.response?.data?.message || "Erro");
        })
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        getOrders();

    }, [])

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Header titulo="Serviços"/>

            <ScrollView
            style={{ paddingHorizontal: '1%', paddingTop: 5, paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            >
                {orders?.length > 0 ? 
                    orders?.map((item) => (
                        <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate('Pedido')}
                        >
                            <CardPedido />
                        </TouchableOpacity>
                    ))
                :
                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <Text>não possui nenhum serviço contratado.</Text>
                    </View>
                }

                
            </ScrollView>
        </SafeAreaView>
    )
}