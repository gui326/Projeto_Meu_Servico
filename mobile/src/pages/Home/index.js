import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/Header";
import Pesquisa from "../../components/Pesquisa";

import { AntDesign } from '@expo/vector-icons';

import { Area, Categoria, Item, Title } from "./styled";


export default function Home(){
    return(
        <SafeAreaView>
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
                        <Item>
                            <Title>Eletricista</Title>
                        </Item>

                        <Item>
                            <Title>Pedreiro</Title>
                        </Item>

                        <Item>
                            <Title>Confeiteira</Title>
                        </Item>

                        <Item>
                            <Title>Mecânico</Title>
                        </Item>

                        <Item>
                            <Title>Soldador</Title>
                        </Item>

                        <Item>
                            <Title>Encanador</Title>
                        </Item>
                    </ScrollView>
                </Area>

            </ScrollView>
        </SafeAreaView>
    )
}