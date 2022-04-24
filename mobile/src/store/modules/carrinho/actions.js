export function adicionar_servico(carrinho){
    return{
        type: 'ADD_SERVICO',
        carrinho
    }
}

export function remover_servico(){
    return {
        type: 'REMOVER_SERVICO'
    }
}