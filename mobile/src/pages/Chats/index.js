import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from "react-native";
import { useSelector } from "react-redux";
import CardChat from "../../components/CardChat";
import Header from "../../components/Header";

import api from "../../services/api";


export default function Chats(){
    const userData = useSelector(state => state.users);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([]);

    const getChats = async () => {
        setLoading(true);

        await api
        .get(`/chat`, {headers: { authorization: `Bearer ${userData.token}` }})
        .then((response) => {
            console.log(response.data);
            setChats(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
            alert(error.response?.data?.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        getChats();

    }, [])

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Header titulo="Chat"/>

            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                {chats?.length > 0 ?
                    chats?.map((item) => (
                        <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate('Chat')}
                        >
                            <CardChat />
                        </TouchableOpacity>
                    ))
                    :
                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <Text>não possui nenhum chat aberto.</Text>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}