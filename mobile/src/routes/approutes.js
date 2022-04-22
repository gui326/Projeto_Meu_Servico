import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../pages/Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Pesquisa from "../pages/Pesquisa";
import Servicos from "../pages/Servicos";
import Chats from "../pages/Chats";
import Perfil from "../pages/Perfil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Servico from "../pages/Servico";
import Contratacao from "../pages/Contratacao";
import Pedido from "../pages/Pedido";
import Chat from "../pages/Chat";


export default function AppRoutes(props){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
        backBehavior="history"
        screenOptions={{
            
            tabBarHideOnKeyboard: true,
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

            <Tab.Screen name="Pesquisa" component={PerfilStack}
            listeners={({ navigation }) => ({
                blur: () => navigation.setParams({ screen: undefined })
            })}
            options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="search-sharp" size={24} color={focused ? "#E83151" : "#B2ACAB"} />
                ),
            }}
            />

            <Tab.Screen name="Servicos" component={PedidoStack}
            options={{
                tabBarLabel: 'Serviços',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="md-list-sharp" size={24} color={focused ? "#E83151" : "#B2ACAB"} />
                ),
            }}
            />

            <Tab.Screen name="Chats" component={ChatStack}
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="chatbox-outline" size={24} color={focused ? "#E83151" : "#B2ACAB"} />
                ),
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
            <Stack.Screen name="Pesquisaa" component={Pesquisa} />

            <Stack.Screen name="Perfil" component={Perfil} />

            <Stack.Screen name="Servico" component={Servico} />

            <Stack.Screen name="Contratacao" component={Contratacao} />
        </Stack.Navigator>
    )
}

function PedidoStack(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Servicoss" component={Servicos} />

            <Stack.Screen name="Pedido" component={Pedido} />
        </Stack.Navigator>
    )
}

function ChatStack(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Chatss" component={Chats} />

            <Stack.Screen 
            options={{
                tabBarVisible: { display: "none" },
                tabBarStyle: { display: "none" }
            }}
            name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}