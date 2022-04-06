import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Header, Empresa, NomeServico, MessageArea, MessageChat, Message, Data, Input, Button, ButtonText } from "./styled";
import { useNavigation } from "@react-navigation/native";


export default function Chat(){
    const navigation = useNavigation();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            cliente: true,
            message: "Olá, tudo bom! quero fazer o orçamento da Troca da fiação.",
            data: "04/05/2022"
        },
        {
            id: 2,
            cliente: false,
            message: "Olá, tudo bom! quero fazer o orçamento da Troca da fiação.",
            data: "04/05/2022"
        },
    ]);

    const enviarMensagem = () => {
        var today = new Date();

        var date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;

        let newMessage = {
            id: Math.random() + 123,
            cliente: true,
            message,
            data: date
        }

        setMessages([...messages, newMessage]);

        setMessage("");
    }

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Header style={{ flex: .07 }}>
                <TouchableOpacity
                style={{ flex: 0, alignSelf: 'center' }}
                onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="#DBD4D3" />
                </TouchableOpacity>

                <View style={{ alignItems: 'center', textAlign: 'center', flex: .95 }}>
                    <Empresa>
                        Eletromanik
                    </Empresa>
                    <NomeServico>
                        Troca de lâmpada
                    </NomeServico>
                </View>
            </Header>

            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: '4%', flex: 8, marginBottom: 15, paddingTop: 15 }}
            >
                {messages.map((value) => (
                    <MessageArea key={value.id} cliente={value.cliente}>
                        <MessageChat cliente={value.cliente}>
                            <Message>{value.message}</Message>
                            <Data>{value.data}</Data>
                        </MessageChat>
                    </MessageArea>
                ))}
                
            </ScrollView>

            <View style={{ marginBottom: 15, paddingHorizontal: '4%', display: 'flex', flexDirection: 'row' }}>
                <Input 
                value={message}
                onChangeText={setMessage}
                />

                <Button
                onPress={() => enviarMensagem()}
                >
                    <ButtonText>
                        Enviar
                    </ButtonText>
                </Button>
            </View>
            
        </SafeAreaView>
    )
}