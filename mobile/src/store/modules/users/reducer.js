import AsyncStorage from '@react-native-async-storage/async-storage';

export default function user(state = null, action){
    switch(action.type){
        case 'LOGAR':
            const signInUserStorage = async (userDados) => {
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(userDados));
                } catch (e) {
                    alert('Falha no carregamento, por favor tente mais tarde | 1');
                }
            }

            signInUserStorage(action.user);
              
            return action.user;
        case 'DESLOGAR':    
            const removeUserStorage = async () => {
                try {
                    await AsyncStorage.removeItem('user');
                } catch (e) {
                    alert('Falha no carregamento, por favor tente mais tarde | 2');
                }
            }

            removeUserStorage();

            return null;
        default:
            return state;
    }
}