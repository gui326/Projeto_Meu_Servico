import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Image, ScrollView } from "react-native";
import { Titulo, Descricao, Button, ButtonText } from "./styled";

export default function Inicio(){
    const navigation = useNavigation();

    return(
        <SafeAreaView
        style={{ flexDirection: 'column', alignItems: 'center', flex: 1, backgroundColor: '#E83151' }}
        >
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flexDirection: 'column', flex: 1, paddingVertical: 35, paddingHorizontal: 15 }}
            >
                <Image style={{ alignSelf: 'center', marginTop: 35 }} source={require('../../../assets/miniLogo.png')}/>

                <Image style={{ marginTop: 7 }} source={require('../../../assets/ImagemFundo.png')}/>

                <Titulo>
                    MEU SERVIÇO
                </Titulo>

                <Descricao>
                    O app que veio conectar você com o serviço que deseja.
                </Descricao>

                <Button
                onPress={() => navigation.navigate('Cadastro')}
                >
                    <ButtonText>
                        Cadastra-se
                    </ButtonText>
                </Button>

                <Button
                onPress={() => navigation.navigate('Login')}
                style={{ backgroundColor: '#E83151', borderWidth: 1, borderColor: 'white', marginBottom: 55 }}>
                    <ButtonText style={{ color: 'white' }}>
                        Login
                    </ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}