import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import CardChat from "../../components/CardChat";
import Header from "../../components/Header";

export default function Chats(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Header titulo="Chat"/>

            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                >
                    <CardChat />
                </TouchableOpacity>

                <CardChat />

                <CardChat />

                <CardChat />

                <CardChat />
                
                <CardChat />

                <CardChat />

                <CardChat />

                <CardChat />
            </ScrollView>
        </SafeAreaView>
    )
}