import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from "react-native";
import CardPedido from "../../components/CardPedido";
import Header from "../../components/Header";

import api from "../../services/api";
import { useSelector } from "react-redux";
import SkeletonContent from "react-native-skeleton-content";


export default function Servicos(){
    const navigation = useNavigation();
    const userData = useSelector(state => state.users);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
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

    const SkeletonBlock = () => {
        return(
            <>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <SkeletonContent
                    containerStyle={{ flex: 2, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 15, alignSelf: 'center', borderRadius: 30, width: 50, height: 50, marginBottom: 6 }
                    ]}
                    />

                    <SkeletonContent
                    containerStyle={{ flex: 8, width: 50 }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 15 , width: '35%', height: 20, marginBottom: 6 },
                        { key: 2, width: '30%', height: 15, marginBottom: 6 },
                    ]}
                    />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <SkeletonContent
                    containerStyle={{ marginLeft: 15, flex: 8, width: 50 }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 2, width: '35%', height: 20, marginBottom: 6 },
                        { key: 2, width: '30%', height: 15, marginBottom: 6 },
                    ]}
                    />
                </View>
            </>
        )
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
                
                {SkeletonBlock()}

                {SkeletonBlock()}

                {SkeletonBlock()}

                {!loading &&
                    <>
                        {orders?.length > 0 ? 
                            orders?.map((item) => (
                                <TouchableOpacity
                                key={item.id}
                                onPress={() => navigation.navigate('Pedido', {id: item.id})}
                                >
                                    <CardPedido item={item}/>
                                </TouchableOpacity>
                            ))
                        :
                            <View style={{ marginTop: 10, alignItems: 'center' }}>
                                <Text>não possui nenhum serviço contratado.</Text>
                            </View>
                        }
                    </>
                }

                
            </ScrollView>
        </SafeAreaView>
    )
}