import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { logar } from "../store/modules/users/action";

import AppRoutes from "./approutes";
import AuthRoutes from "./authroutes";
import { ActivityIndicator, View } from "react-native";


export default function Routes(){
    const user = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            dispatch(logar(JSON.parse(jsonValue)));
        } catch(e) {
            alert(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if(loading){
        return(
            <View style={{ flex: 1, backgroundColor: '#E83151', justifyContent: 'center'}}>
                <ActivityIndicator size='large' color="white"/>
            </View>
        );
    }

    return(
        user ? <AppRoutes /> : <AuthRoutes />
    );
}