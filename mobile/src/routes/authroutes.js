import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../pages/Inicio";

export default function AuthRoutes(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Inicio" component={Inicio}/>
        </Stack.Navigator>
    );
}