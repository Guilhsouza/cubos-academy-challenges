function solucao(numeros) {
    const valorDeS = numeros.reduce((acumulator, currentValue) => {
        return acumulator + currentValue
    })

    let ultimoJogador = valorDeS % numeros.length

    if (ultimoJogador === 0) {
        console.log(numeros.length)
    } else {
        console.log(ultimoJogador)
    }

}

const numeros = [1, 2, 3, 1, 1, 3]

solucao(numeros)
