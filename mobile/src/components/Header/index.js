import { View } from "react-native";

import { Titulo } from "./styled";

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(props){
    return(
        <View style={{ paddingTop: 40, paddingBottom: 20, paddingHorizontal: "4%", alignItems: 'center', backgroundColor: '#E83151', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <FontAwesome5 name="user-circle" size={27} color="#DBD4D3" />

            <Titulo>{props.titulo}</Titulo>

            <MaterialIcons name="notifications-none" size={27} color="#DBD4D3" />
        </View>
    )
}