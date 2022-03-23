export function logar(user){
    return{
        type: 'LOGAR',
        user
    }
}

export function deslogar(){
    return {
        type: 'DESLOGAR'
    }
}