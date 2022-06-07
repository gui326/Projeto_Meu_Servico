import { useState } from "react";
import { SafeAreaView, ScrollView, Image, View, TouchableNativeFeedback, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Titulo, Descricao, Label, Button, ButtonText, AreaInput, Input, IconArea, Logo } from "./styled";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { logar } from "../../store/modules/users/action";

import api from "../../services/api";


export default function Login(){
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [inputAtivo, setInputAtivo] = useState({
        email: false,
        senha: false
    });

    const handleLogin = async () => {
        await api
        .post('/client/login', {"email": "fulano@email.com", "password": "12345"})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
        })

        //dispatch(logar({name: 'teste'}));
    }

    return(
        <SafeAreaView
        style={{ backgroundColor: 'white', flex: 1 }}
        >
            <ScrollView
            style={{ paddingVertical: 35, paddingHorizontal: 15}}
            showsVerticalScrollIndicator={false}
            >
                <TouchableNativeFeedback
                onPress={() => navigation.goBack()}
                >
                    <View style={{ alignSelf: 'flex-start', padding: 10, marginLeft: -10}}>
                        <Ionicons name="arrow-back" size={30} color="#AAAAAA" />
                    </View>
                </TouchableNativeFeedback>

                <View style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                    <Image source={require('../../../assets/logo.png')}/>
                    <Logo>
                        Meu{"\n"}Serviço
                    </Logo>
                </View>

                <Titulo>
                    Fazendo o acesso
                </Titulo>

                <Descricao>
                    Digite os seus dados para poder entrar.
                </Descricao>

                <Label>
                    Email
                </Label>
                <AreaInput>
                    <IconArea>
                        <MaterialCommunityIcons name="email-outline" size={20} color={inputAtivo.email ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
                    selectionColor={'#E83151'}
                    ativo={inputAtivo.email}
                    onFocus={() => setInputAtivo({...inputAtivo, email: true})}
                    onBlur={() => setInputAtivo({...inputAtivo, email: false})}
                    />
                </AreaInput>

                <Label>
                    Senha
                </Label>
                <AreaInput>
                    <IconArea>
                        <MaterialCommunityIcons name="key-outline" size={20} color={inputAtivo.senha ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
                    selectionColor={'#E83151'}
                    ativo={inputAtivo.senha}
                    onFocus={() => setInputAtivo({...inputAtivo, senha: true})}
                    onBlur={() => setInputAtivo({...inputAtivo, senha: false})}
                    />
                </AreaInput>

                <Button 
                onPress={() => handleLogin()}
                style={{ marginTop: 30 }}>
                    <ButtonText>
                        Login
                    </ButtonText>
                </Button>

                <Text style={{ marginBottom: 55, marginTop: 20, textAlign: 'center', textDecorationLine: 'underline' }}>
                    Esqueci a Senha
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}