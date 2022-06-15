import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, Text } from "react-native";
import Header from "../../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonText } from "./styled";
import { deslogar } from "../../store/modules/users/action";


export default function Usuario(){
    const userData = useSelector(state => state.users);
    const dispatch = useDispatch();

    console.log(userData);

    const handleLogout = () => {
        dispatch(deslogar());
    }

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Header titulo="Perfil"/>

            <ScrollView
            style={{ paddingHorizontal: '4%', paddingTop: 5, paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            >
                <Text
                style={{ marginTop: 15, fontSize: 18 }}
                >
                    nome: {userData.name}
                </Text>

                <Button style={{ marginTop: 25 }}>
                    <ButtonText
                    onPress={() => handleLogout()}
                    >
                        Sair
                    </ButtonText>
                </Button>
                
            </ScrollView>
        </SafeAreaView>
    )
}