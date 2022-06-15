import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from "react-native";
import CardPedido from "../../components/CardPedido";
import Header from "../../components/Header";

import { useSelector } from "react-redux";


export default function Usuario(){
    const navigation = useNavigation();
    const userData = useSelector(state => state.users);
    console.log('usuario', userData);

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Header titulo="Perfil"/>

            <ScrollView
            style={{ paddingHorizontal: '1%', paddingTop: 5, paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            >

                
            </ScrollView>
        </SafeAreaView>
    )
}