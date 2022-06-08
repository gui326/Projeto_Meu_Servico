import { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { MaterialIcons } from '@expo/vector-icons';
import SkeletonContent from 'react-native-skeleton-content';

import { AreaInput, Input } from "./styled";
import CardPerfil from "../../components/CardPerfil";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import api from "../../services/api";


export default function Pesquisa(props){
    const userData = useSelector(state => state.users);
    const navigation = useNavigation();
    const [pesquisa, setPesquisa] = useState(props.route?.params?.pesquisa || "");
    const [loading, setLoading] = useState(false);

    const [companies, setCompanies] = useState([]);

    const getCompanies = async () => {
        setLoading(true);

        console.log(userData.token);

        await api
        .get('/company', {headers: { authorization: `Bearer ${userData.token}` }})
        .then((response) => {
            setCompanies(response.data);
        })
        .catch((error) => {
            alert(error.response.data.message || error.response.data);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        getCompanies();
    }, [])

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>

            <Header />

            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <AreaInput>
                    <MaterialIcons 
                    style={{
                        position: "absolute",
                        left: 30,
                        top: 25,
                        zIndex: 2
                    }}
                    name="search" size={30} color="#E83151" />

                    <Input
                    value={pesquisa}
                    onChangeText={setPesquisa}
                    placeholder="Pesquisa"
                    selectionColor={'#E83151'}
                    />
                </AreaInput>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <SkeletonContent
                    containerStyle={{ flex: 2, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 15, alignSelf: 'center', borderRadius: 30, width: 50, height: 50, marginBottom: 6 }
                    ]}
                    />

                    <SkeletonContent
                    containerStyle={{ flex: 8, width: 50 }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 15 , width: '35%', height: 20, marginBottom: 6 },
                        { key: 2, width: '30%', height: 15, marginBottom: 6 },
                        { key: 3, width: '80%', height: 20, marginBottom: 6 },
                    ]}
                    />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <SkeletonContent
                    containerStyle={{ flex: 2, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 25, alignSelf: 'center', borderRadius: 30, width: 50, height: 50, marginBottom: 6 }
                    ]}
                    />

                    <SkeletonContent
                    containerStyle={{ flex: 8, width: 50 }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 25, width: '35%', height: 20, marginBottom: 6 },
                        { key: 2, width: '30%', height: 15, marginBottom: 6 },
                        { key: 3, width: '80%', height: 20, marginBottom: 6 },
                    ]}
                    />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <SkeletonContent
                    containerStyle={{ flex: 2, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 25, alignSelf: 'center', borderRadius: 30, width: 50, height: 50, marginBottom: 6 }
                    ]}
                    />

                    <SkeletonContent
                    containerStyle={{ flex: 8, width: 50 }}
                    isLoading={loading}
                    layout={[
                        { key: 1, marginTop: 25, width: '35%', height: 20, marginBottom: 6 },
                        { key: 2, width: '30%', height: 15, marginBottom: 6 },
                        { key: 3, width: '80%', height: 20, marginBottom: 6 },
                    ]}
                    />
                </View>

                {!loading &&
                    <>
                        {companies?.map((item) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Perfil')}
                            >
                                <CardPerfil item={item}/>
                            </TouchableOpacity>
                        ))}
                    </>
                }

            </ScrollView>
        </SafeAreaView>
    )
}