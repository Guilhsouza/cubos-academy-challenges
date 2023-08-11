function solucao(lista) {
    const resultado = lista.reduce((acumulator, currentValue) => {
        return acumulator + currentValue
    })

    console.log(resultado / lista.length)
}