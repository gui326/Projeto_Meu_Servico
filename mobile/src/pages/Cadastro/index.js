import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableNativeFeedback, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Titulo, Descricao, Label, Info, Button, ButtonText, AreaInput, Input, IconArea } from "./styled";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { Controller, useForm } from "react-hook-form";

import api from "../../services/api";
import MessageError from "../../components/MessageError";
import LoadingFull from "../../components/LoadingFull";


export default function Cadastro(){
    const navigation = useNavigation();
    const [inputAtivo, setInputAtivo] = useState({
        nome: false,
        email: false,
        telefone: false,
        senha: false
    });

    const [success, setSuccess] = useState(false);

    const [loadingFull, setLoadingFull] = useState(false);

    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const handleRegister = async (data) => {
        setLoadingFull(true);
        const newClient = {
            "email":  data.email,
            "password": data.senha,
            "phone": data.telefone,
            "name": data.nome
        }

        await api
        .post('/client/register', newClient)
        .then(() => {
            setSuccess(true);
        })
        .catch((error) => {
            alert(error.response.data.message || error.response.data);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    return(
        <SafeAreaView
        style={{ backgroundColor: 'white', flex: 1 }}
        >
            {!success ?
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

                        <Controller
                        name="nome"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            onFocus={() => setInputAtivo({
                                email:  false,
                                senha: false,
                                telefone: false,
                                nome: true
                            })}
                            selectionColor={'#E83151'}
                            ativo={inputAtivo.nome}
                            />
                        )}
                        />
                    </AreaInput>

                    {errors.nome && <MessageError> Campo necessário </MessageError>}

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
                            value={value}
                            keyboardType="email-address"
                            autoComplete="email"
                            autoCapitalize='none'
                            onFocus={() => setInputAtivo({
                                email:  true,
                                senha: false,
                                telefone: false,
                                nome: false
                            })}
                            selectionColor={'#E83151'}
                            ativo={inputAtivo.email}
                            />
                        )}
                        />
                    </AreaInput>

                    {errors.email && <MessageError> Campo necessário </MessageError>}

                    <Label>
                        Telefone
                    </Label>
                    <AreaInput>
                        <IconArea>
                            <MaterialCommunityIcons name="phone-outline" size={20} color={inputAtivo.telefone ? '#E83151' : "#AAAAAA"} />
                        </IconArea>

                        <Controller 
                        name="telefone"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                            onBlur={onBlur}
                            onChangeText={onChange}
                            keyboardType="phone-pad"
                            value={value}
                            onFocus={() => setInputAtivo({
                                email:  false,
                                senha: false,
                                telefone: true,
                                nome: false
                            })}
                            selectionColor={'#E83151'}
                            ativo={inputAtivo.telefone}
                            />
                        )}
                        />
                    </AreaInput>

                    {errors.telefone && <MessageError> Campo necessário </MessageError>}

                    <Label>
                        Senha
                    </Label>
                    <AreaInput>
                        <IconArea>
                            <MaterialCommunityIcons name="key-outline" size={20} color={inputAtivo.senha ? '#E83151' : "#AAAAAA"} />
                        </IconArea>
                        
                        <Controller 
                        name="senha"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            onSubmitEditing={handleSubmit(handleRegister)}
                            secureTextEntry={true}
                            onFocus={() => setInputAtivo({
                                email:  false,
                                senha: true,
                                telefone: false,
                                nome: false
                            })}
                            selectionColor={'#E83151'}
                            ativo={inputAtivo.senha}
                            />
                        )}
                        />
                    </AreaInput>

                    {errors.senha && <MessageError> Campo necessário </MessageError>}

                    <Info>
                        Ao clicar no botão cadastra-se, você aceita os nossos termos de condições e politíca. 
                    </Info>

                    <Button
                    onPress={handleSubmit(handleRegister)}
                    >
                        <ButtonText>
                            Cadastrar-se
                        </ButtonText>
                    </Button>
                </ScrollView>
                :
                <View style={{ padding: 16, flex: 1, display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                    <Image style={{ width: 320, height: 320 }} source={require('../../../assets/cadastro.png')}/>

                    <View style={{ textAlign: 'center' }}>
                        <Text
                        style={{ textAlign: 'center', fontSize: 32, paddingTop: 10, fontWeight: '700' }}
                        >Cadastro realizado com sucesso!</Text>

                        <Text
                        style={{ textAlign: 'center', fontSize: 16, paddingTop: 15 }}
                        >Entre para acessar diversos serviços disponíveis em nossa plataforma</Text>

                        <Button
                        style={{ marginTop: 20 }}
                        onPress={() => {
                            navigation.popToTop();
                            navigation.navigate('Login');
                        }}
                        >
                            <ButtonText>
                                Entrar
                            </ButtonText>
                        </Button>
                    </View>
                </View>
            }

            <LoadingFull open={loadingFull}/>
        </SafeAreaView>
    );
}