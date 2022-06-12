import { useState } from "react";
import { SafeAreaView, ScrollView, Image, View, TouchableNativeFeedback, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Titulo, Descricao, Label, Button, ButtonText, AreaInput, Input, IconArea, Logo } from "./styled";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { logar } from "../../store/modules/users/action";

import api from "../../services/api";
import LoadingFull from "../../components/LoadingFull";
import { Controller, useForm } from "react-hook-form";
import { useRef } from "react";
import MessageError from "../../components/MessageError";


export default function Login(){
    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [inputAtivo, setInputAtivo] = useState({
        email: false,
        senha: false
    });

    const inputSenha = useRef();

    const [loadingFull, setLoadingFull] = useState(false);

    const handleLogin = async (data) => {
        setLoadingFull(true);

        await api
        .post('/client/login', {"email": data.email, "password": data.password})
        .then((response) => {
            dispatch(logar( {name: 'nãoImplementado', token: response.data.token} ));
        })
        .catch((error) => {
            alert(error.response.data.message);
        })
        .finally(() => {
            setLoadingFull(false);
        })
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

                    <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input 
                        onBlur={onBlur}
                        onChangeText={onChange}
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize='none'
                        onSubmitEditing={() => inputSenha.current.focus()}
                        value={value}
                        onFocus={() => setInputAtivo({senha: false, email: true})}
                        selectionColor={'#E83151'}
                        ativo={inputAtivo.email}
                        />
                    )}
                    />
                    
                </AreaInput>

                {errors.email && 
                    <MessageError>Campo necessário</MessageError>
                }

                <Label>
                    Senha
                </Label>
                <AreaInput>
                    <IconArea>
                        <MaterialCommunityIcons name="key-outline" size={20} color={inputAtivo.senha ? '#E83151' : "#AAAAAA"} />
                    </IconArea>

                    <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value }}) => (
                        <Input 
                        onBlur={onBlur}
                        ref={inputSenha}
                        onChangeText={onChange}
                        secureTextEntry={true}
                        onSubmitEditing={handleSubmit(handleLogin)}
                        value={value}
                        selectionColor={'#E83151'}
                        ativo={inputAtivo.senha}
                        onFocus={() => setInputAtivo({email: false, senha: true})}
                        />
                    )}
                    />
                </AreaInput>

                {errors.password && 
                    <MessageError>Campo necessário</MessageError>
                }

                <Button 
                onPress={handleSubmit(handleLogin)}
                style={{ marginTop: 30 }}>
                    <ButtonText>
                        Login
                    </ButtonText>
                </Button>

                <Text style={{ marginBottom: 55, marginTop: 20, textAlign: 'center', textDecorationLine: 'underline' }}>
                    Esqueci a Senha
                </Text>
            </ScrollView>

            <LoadingFull open={loadingFull} setOpen={setLoadingFull}/>
        </SafeAreaView>
    );
}