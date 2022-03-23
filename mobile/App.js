import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import Routes from './src/routes';

import store from "./src/store";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />

        <Routes />
      </NavigationContainer>
    </Provider>
  );
}