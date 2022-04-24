export function logar(users){
    return{
        type: "LOGAR",
        users
    }
}

export function deslogar(){
    return{
        type: "DESLOGAR"
    }
}