function solucao(lista) {
    const idadeMinima = 18
    const maioresDeIdadeNaLista = lista.filter((idade) => {
        return idade >= idadeMinima
    })

    if (maioresDeIdadeNaLista.length >= 1) {
        let menorIdade = Math.min(maioresDeIdadeNaLista)
        console.log(menorIdade)
    } else {
        console.log("CRESCA E APARECA")
    }
}

let lista = [12, 17, 16, 18, 20, 33]

solucao(lista)