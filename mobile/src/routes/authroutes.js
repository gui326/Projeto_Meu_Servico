import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../pages/Cadastro";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";

export default function AuthRoutes(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Inicio" component={Inicio} />

            <Stack.Screen name="Cadastro" component={Cadastro} />

            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}