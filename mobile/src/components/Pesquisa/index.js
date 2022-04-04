import { Area, SubTitle, Title, AreaInput, Input } from "./styled";
import { MaterialIcons } from '@expo/vector-icons';
import { View } from "react-native";

 
export default function Pesquisa(){
    return(
        <Area>
            <SubTitle>
                Serviços
            </SubTitle>

            <View style={{ 
                width: 125, height: 120, zIndex: 25, borderWidth: 1, borderColor: 'white', borderRadius: 120,
                position: "absolute",
                top: 10,
                left: 120,
                opacity: .5
            }} 
            />

            <Title>
                Qual o serviço você deseja encontrar agora?
            </Title>

            <AreaInput>
                <MaterialIcons 
                style={{
                    position: "absolute",
                    left: 16,
                    top: 16,
                    zIndex: 2
                }}
                name="search" size={30} color="#E83151" />

                <Input
                selectionColor={'#E83151'}
                />
            </AreaInput>
        </Area>
    )
}