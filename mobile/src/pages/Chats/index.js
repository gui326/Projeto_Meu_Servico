import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from "react-native";
import { useSelector } from "react-redux";
import CardChat from "../../components/CardChat";
import Header from "../../components/Header";

import SkeletonContent from "react-native-skeleton-content";

import api from "../../services/api";


export default function Chats(){
    const userData = useSelector(state => state.users);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [chats, setChats] = useState([]);

    const getChats = async () => {
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
                        { key: 2, width: '22%', height: 15, marginBottom: 6 },
                        { key: 3, width: '49%', height: 10, marginBottom: 6 },
                    ]}
                    />
                </View>
            </>
        )
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
                {SkeletonBlock()}

                {SkeletonBlock()}

                {SkeletonBlock()}

                {SkeletonBlock()}

                {!loading && 
                    <>
                        {chats?.length > 0 ?
                            chats?.map((item) => (
                                <TouchableOpacity
                                key={item.id}
                                onPress={() => navigation.navigate('Chat', { id: item.id })}
                                >
                                    <CardChat item={item}/>
                                </TouchableOpacity>
                            ))
                            :
                            <View style={{ marginTop: 10, alignItems: 'center' }}>
                                <Text>não possui nenhum chat aberto.</Text>
                            </View>
                        }
                    </>
                }
            </ScrollView>
        </SafeAreaView>
    )
}