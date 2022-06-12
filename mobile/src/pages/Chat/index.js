import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Header, Empresa, NomeServico, MessageArea, MessageChat, Message, Data, Input, Button, ButtonText } from "./styled";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingFull from "../../components/LoadingFull";


export default function Chat(props){
    const navigation = useNavigation();
    const userData = useSelector(state => state.users);

    const [loadingFull, setLoadingFull] = useState(true);

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState({});
    const [messages, setMessages] = useState([
        {
            id: 1,
            cliente: true,
            message: "Olá, tudo bom! quero fazer o orçamento da Troca da fiação.",
            data: "04/05/2022"
        }
    ]);

    const enviarMensagem = () => {
        if(message){
            apiSendMessage();

            var today = new Date();

            var date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;

            let newMessage = {
                id: Math.random() + 123,
                isCompany: false,
                content: message,
                createdAt: date
            }

            setMessages([...messages, newMessage]);

            setMessage("");
        }
    }

    const apiSendMessage = async () => {
        const newMessage = {
            "content": message,
            "isCompany": false
        }

        console.log('teste:', newMessage);

        await api
        .post(`/chat/${props.route?.params?.id}`, newMessage, {headers: {Authorization: `Bearer ${userData.token}`}})
        .then((response) => {
            //console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {

        })
    }

    const apiGetChatAndMessages = async () => {

        await api
        .get(`/chat/${props.route?.params?.id}`, {headers: {Authorization: `Bearer ${userData.token}`}})
        .then((response) => {
            setChat(response.data.chat);
            setMessages(response.data.messages);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    useEffect(() => {
        apiGetChatAndMessages();

    }, [])
    

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
                        {chat?.Order?.Company?.name}
                    </Empresa>
                    <NomeServico>
                        {chat?.Order?.Service?.name}
                    </NomeServico>
                </View>
            </Header>

            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: '4%', flex: 8, marginBottom: 15, paddingTop: 15 }}
            >
                {messages.map((value) => (
                    <MessageArea key={value.id} cliente={!value.isCompany}>
                        <MessageChat cliente={!value.isCompany}>
                            <Message>{value.content}</Message>
                            <Data>{value.createdAt}</Data>
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

            <LoadingFull open={loadingFull}/>
            
        </SafeAreaView>
    )
}