function solucao(min, max, valores) {
    const resultado = valores.filter((valores) => {
        if (valores >= min && valores <= max) {
            return valores
        }
    })
    console.log(resultado)
}
