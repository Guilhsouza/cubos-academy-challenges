function solucao(precos) {
    const valorTotal = precos.reduce((acumulator, currentValue) => {
        return acumulator + currentValue
    })

    const produtoMaisBarato = Math.min(...precos)
    let menorValorComDesconto = produtoMaisBarato / 2

    if (precos.length >= 3) {
        console.log(valorTotal - menorValorComDesconto)
    } else {
        console.log(valorTotal)
    }
}
