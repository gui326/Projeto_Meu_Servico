import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import Pesquisa from "../../components/Pesquisa";

import { AntDesign } from '@expo/vector-icons';

import { Area, Categoria, Item, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >

                <Header />

                <Pesquisa/>
                
                <Area>
                    <AntDesign name="tagso" size={24} color="#494949" />

                    <Categoria>
                        Categorias populares
                    </Categoria>
                
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Pesquisa', {pesquisa: 'Eletricista'})}
                        >
                            <Item>
                                <Title>Eletricista</Title>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Pesquisa', {pesquisa: 'Pedreiro'})}
                        >
                            <Item>
                                <Title>Pedreiro</Title>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Pesquisa', {pesquisa: 'Confeiteira'})}
                        >
                            <Item>
                                <Title>Confeiteira</Title>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Pesquisa', {pesquisa: 'Mecânico'})}
                        >
                            <Item>
                                <Title>Mecânico</Title>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Pesquisa', {pesquisa: 'Soldador'})}
                        >
                            <Item>
                                <Title>Soldador</Title>
                            </Item>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Pesquisa', {pesquisa: 'Encanador'})}
                        >
                            <Item>
                                <Title>Encanador</Title>
                            </Item>
                        </TouchableOpacity>
                    </ScrollView>
                </Area>

            </ScrollView>
        </SafeAreaView>
    )
}