function solucao(jogadores) {
    const jogadasCom0 = jogadores.filter((jogador) => {
        return jogador.jogada === 0
    })
    const jogadasCom1 = jogadores.filter((jogador) => {
        return jogador.jogada === 1
    })

    if (jogadasCom0.length === 1) {
        console.log(jogadasCom0[0].nome)
    } else if (jogadasCom1.length === 1) {
        console.log(jogadasCom1[0].nome)
    } else {
        console.log('NINGUEM')
    }
}
