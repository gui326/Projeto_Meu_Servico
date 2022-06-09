import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Area, Titulo, LogoArea, Categoria, Pontuacao, Descricao, Header } from "./styled";
import CardServico from "../../components/CardServico";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import { useSelector } from "react-redux";


export default function Perfil(props){
    const navigation = useNavigation();
    const userData = useSelector(state => state.users);
    const [loading, setLoading] = useState(false);
    const [company, setCompany] = useState({});

    const getProfile = async () => {
        setLoading(true);

        await api
        .get(`/company/${props.route?.params?.companyId}`, {headers: { authorization: `Bearer ${userData.token}` }})
        .then((response) => {
            console.log(response.data);
            setCompany(response.data);
        })
        .catch((error) => {
            alert(error.response?.data?.message || "Erro");
        })
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        getProfile();

    }, []);
    
    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            
            <Header>
                <TouchableOpacity
                style={{ flex: 0 }}
                onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="#DBD4D3" />
                </TouchableOpacity>

                <Titulo>{company?.company?.name}</Titulo>
            </Header>
            


            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <Area>
                    <LogoArea>
                        <Image
                        style={{ width: 82, height: 82, borderRadius: 50 }}
                        source={{uri: company?.company?.image || 'https://ui-avatars.com/api/?name=Guilherme+Batista'}} />
                    </LogoArea>

                    <View style={{ marginTop: 0, marginBottom: 10, justifyContent: 'center', display: "flex", flexDirection: "row"}}>
                        <View style={{ marginRight: 15, display: "flex", flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="tag-text-outline" size={18} color="black" />
                            <Categoria>{company?.company?.Category.name}</Categoria>
                        </View>
                        <View style={{ display: "flex", flexDirection: 'row' }}>
                            <AntDesign name="star" size={18} color="#E9E133" />
                            <Pontuacao>4,5</Pontuacao>
                        </View>
                    </View>

                    <Descricao>
                        {company?.company?.description}
                    </Descricao>
                </Area>

                <View style={{ marginTop: 10, paddingHorizontal: '4%' }}>
                    {company?.services?.map((item) => (
                        <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            navigation.navigate('Servico', {
                                service: {id: item.id, name: item.name, description: item.description, price: item.price},
                                company: {id: company?.company?.id, name: company?.company?.name, image: company?.company?.image}
                            })
                        }}
                        >
                            <CardServico item={item}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}