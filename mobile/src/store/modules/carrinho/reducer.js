import AsyncStorage from '@react-native-async-storage/async-storage';

export default function carrinho(state = null, action){
    switch(action.type){
        case 'ADD_SERVICO':
            const signInUserStorage = async (servicoDados) => {
                try {
                    await AsyncStorage.setItem('carrinho', JSON.stringify(servicoDados));
                } catch (e) {
                    alert('Falha no carregamento, por favor tente mais tarde | 1');
                }
            }

            signInUserStorage(action.carrinho);
              
            return action.carrinho;
        case 'REMOVER_SERVICO':    
            const removeUserStorage = async () => {
                try {
                    await AsyncStorage.removeItem('carrinho');
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