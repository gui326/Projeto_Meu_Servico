import { Image } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import { Background, LogoArea, InfoArea, Titulo, Tipo, Ultima, IconArea } from "./styled";


export default function CardChat({item}){
    return(
        <Background>
            <LogoArea>
                <Image source={{ uri: item.Order.Company.image }} style={{ width: 50, height: 50, borderRadius: 50 }}/>
            </LogoArea>
            <InfoArea>
                <Titulo>
                    {item.Order.Company.name}
                </Titulo>
                <Tipo>
                    {item.status}
                </Tipo>
                <Ultima>
                    ultima mensagem {`${item.createdAt.split('T')[0].split('-')[2]}/${item.createdAt.split('T')[0].split('-')[1]}/${item.createdAt.split('T')[0].split('-')[0]}`}
                </Ultima>
            </InfoArea>
            <IconArea>
                <MaterialIcons name="keyboard-arrow-right" size={30} color="#B0A7A7" />
            </IconArea>
        </Background>
    );
}