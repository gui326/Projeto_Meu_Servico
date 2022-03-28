import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableNativeFeedback, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Titulo, Descricao, Label, Info, Button, ButtonText, AreaInput, Input, IconArea } from "./styled";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Cadastro(){
    const navigation = useNavigation();
    const [inputAtivo, setInputAtivo] = useState({
        nome: false,
        email: false,
        telefone: false,
        senha: false
    });

    return(
        <SafeAreaView
        style={{ flex: 1 }}
        >
            <ScrollView
            style={{ paddingVertical: 45, paddingHorizontal: 15}}
            showsVerticalScrollIndicator={false}
            >
                <TouchableNativeFeedback
                onPress={() => navigation.goBack()}
                >
                    <View style={{ alignSelf: 'flex-start' }}>
                        <Ionicons name="arrow-back" size={32} color="#AAAAAA" />
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
                        <FontAwesome5 name="user" size={21} color={inputAtivo.nome ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
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
                        <MaterialCommunityIcons name="email-outline" size={22} color={inputAtivo.email ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
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
                        <MaterialCommunityIcons name="phone-outline" size={24} color={inputAtivo.telefone ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
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
                        <MaterialCommunityIcons name="key-outline" size={24} color={inputAtivo.senha ? '#E83151' : "#AAAAAA"} />
                    </IconArea>
                    <Input 
                    selectionColor={'#E83151'}
                    ativo={inputAtivo.senha}
                    onFocus={() => setInputAtivo({...inputAtivo, senha: true})}
                    onBlur={() => setInputAtivo({...inputAtivo, senha: false})}
                    />
                </AreaInput>

                <Info>
                    Ao clicar no botão cadastra-se, você aceita os nossos termos de condições e politíca. 
                </Info>

                <Button>
                    <ButtonText>
                        Cadastrar-se
                    </ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}