import { ScrollView, SafeAreaView, View, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { MaterialIcons } from '@expo/vector-icons';

import { AreaInput, Input } from "./styled";
import CardPerfil from "../../components/CardPerfil";
import { useNavigation } from "@react-navigation/native";


export default function Pesquisa(){
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >

                <Header />

                <AreaInput>
                    <MaterialIcons 
                    style={{
                        position: "absolute",
                        left: 30,
                        top: 25,
                        zIndex: 2
                    }}
                    name="search" size={30} color="#E83151" />

                    <Input
                    placeholder="Pesquisa"
                    selectionColor={'#E83151'}
                    />
                </AreaInput>

                <View style={{ paddingHorizontal: '4%' }}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Perfil')}
                    >
                        <CardPerfil />
                    </TouchableOpacity>

                    <CardPerfil />

                    <CardPerfil />

                    <CardPerfil />

                    <CardPerfil />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}