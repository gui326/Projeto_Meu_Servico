import { SafeAreaView, ScrollView } from "react-native";
import CardChat from "../../components/CardChat";
import Header from "../../components/Header";

export default function Chat(){
    return(
        <SafeAreaView>
            <Header titulo="Chat"/>

            <ScrollView
            style={{ paddingHorizontal: '2%' }}
            showsVerticalScrollIndicator={false}
            >
                <CardChat />

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