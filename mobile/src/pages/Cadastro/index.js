import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableNativeFeedback, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Titulo, Descricao, Label, Info, Button, ButtonText, AreaInput, Input, IconArea } from "./styled";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";


export default function Cadastro(){
    const navigation = useNavigation();
    const [inputAtivo, setInputAtivo] = useState({
        nome: false,
        email: false,
        telefone: false,
        senha: false
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        const newClient = {
            "email":  email,
            "password": password,
            "phone": phone,
            "name": name
        }

        console.log(newClient);
        if(!newClient.email || !newClient.password || !newClient.phone || !newClient.name) return null;

        await api
        .post('/client/register', newClient)
        .then((response) => {
            console.log(response.data);
            navigation.navigate('Login');
        })
        .catch((error) => {
            alert(error.response.data.message || error.response.data);
        })
    }

    return(
        <SafeAreaView
        style={{ backgroundColor: 'white', flex: 1 }}
        >
            <ScrollView
            style={{ paddingVertical: 45, paddingHorizontal: 15}}
            showsVerticalScrollIndicator={false}
            >
                <TouchableNativeFeedback
                onPress={() => navigation.goBack()}
                >
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Ionicons name="arrow-back" size={30} color="#AAAAAA" />
                    </View>
                </TouchableNativeFeedback>

                <Titulo>
                    Começando
                </Titulo>

                <Descricao>
                    Crie uma conta para poder usufruir de um novo mundo
                </Descricao>

                <Label>
                    Nome Completo
                </Label>
                <AreaInput>
                    <IconArea>
                        <FontAwesome5 name="user" size={18} color={inputAtivo.nome ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
                    value={name}
                    onChangeText={setName}
                    selectionColor={'#E83151'}
                    ativo={inputAtivo.nome}
                    onFocus={() => setInputAtivo({...inputAtivo, nome: true})}
                    onBlur={() => setInputAtivo({...inputAtivo, nome: false})}
                    />
                </AreaInput>

                <Label>
                    Email
                </Label>
                <AreaInput>
                    <IconArea>
                        <MaterialCommunityIcons name="email-outline" size={20} color={inputAtivo.email ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
                    value={email}
                    onChangeText={setEmail}
                    selectionColor={'#E83151'}
                    ativo={inputAtivo.email}
                    onFocus={() => setInputAtivo({...inputAtivo, email: true})}
                    onBlur={() => setInputAtivo({...inputAtivo, email: false})}
                    />
                </AreaInput>

                <Label>
                    Telefone
                </Label>
                <AreaInput>
                    <IconArea>
                        <MaterialCommunityIcons name="phone-outline" size={20} color={inputAtivo.telefone ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
                    value={phone}
                    onChangeText={setPhone}
                    selectionColor={'#E83151'}
                    ativo={inputAtivo.telefone}
                    onFocus={() => setInputAtivo({...inputAtivo, telefone: true})}
                    onBlur={() => setInputAtivo({...inputAtivo, telefone: false})}
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
                    value={password}
                    onChangeText={setPassword}
                    selectionColor={'#E83151'}
                    ativo={inputAtivo.senha}
                    onFocus={() => setInputAtivo({...inputAtivo, senha: true})}
                    onBlur={() => setInputAtivo({...inputAtivo, senha: false})}
                    />
                </AreaInput>

                <Info>
                    Ao clicar no botão cadastra-se, você aceita os nossos termos de condições e politíca. 
                </Info>

                <Button
                onPress={() => handleRegister()}
                >
                    <ButtonText>
                        Cadastrar-se
                    </ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}