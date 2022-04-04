import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../pages/Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Pesquisa from "../pages/Pesquisa";
import Servicos from "../pages/Servicos";
import Chat from "../pages/Chat";
import Perfil from "../pages/Perfil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Servico from "../pages/Servico";
import Contratacao from "../pages/Contratacao";


export default function AppRoutes(){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#E83151',
            keyboardHidesTabBar: true
        }}
        >
            <Tab.Screen name="Home" component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name={focused ? "home" : "home-outline"} size={24} color={focused ? "#E83151" : "#B2ACAB"} />
                ),
            }}
            />

            <Tab.Screen name="Pesquisa" component={Pesquisa}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="search-sharp" size={24} color={focused ? "#E83151" : "#B2ACAB"} />
                ),
            }}
            />

            <Tab.Screen name="Servicos" component={Servicos}
            options={{
                tabBarLabel: 'Serviços',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="md-list-sharp" size={24} color={focused ? "#E83151" : "#B2ACAB"} />
                ),
            }}
            />

            <Tab.Screen name="Chat" component={Chat}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="chatbox-outline" size={24} color={focused ? "#E83151" : "#B2ACAB"} />
                ),
            }}
            />

            <Tab.Screen name="Perfil" component={PerfilStack}
            options={{
                tabBarButton: (props) => null, 
            }}
            />
        </Tab.Navigator>
    )
}

function PerfilStack(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Perfil" component={Perfil} />

            <Stack.Screen name="Servico" component={Servico} />

            <Stack.Screen name="Contratacao" component={Contratacao} />
        </Stack.Navigator>
    )
}