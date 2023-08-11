function processData(input) {
    const senhaSeparada = input.split("\n")
    const senhaAtual = senhaSeparada[0]
    const senhaDoInput = senhaSeparada[1]

    let caracteresSenhaAtual = []
    let caracteresSenhaDoInput = []

    for (let caractere of senhaAtual) {
        caracteresSenhaAtual.push(caractere)
    }
    for (let caractere of senhaDoInput) {
        caracteresSenhaDoInput.push(caractere)
    }

    let contador = 0
    for (let i = 0; i < caracteresSenhaDoInput.length; i++) {
        if (senhaAtual[contador] === caracteresSenhaDoInput[i]) {
            contador += 1
        }
    }

    if (contador === senhaAtual.length) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }
}

const input = "cubos\nshiogdjfksdjfosiujcubsoooiiikkkdis"

processData(input)
