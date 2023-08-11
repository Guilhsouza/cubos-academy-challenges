const oVira = "3"

function solucao(carta) {
    const baralhoTruco = ['Q', 'J', 'K', 'A', '2', '3']
    let manilha = ""

    for (let i = 0; i < baralhoTruco.length; i++) {
        if (carta === baralhoTruco[baralhoTruco.length - 1]) {
            manilha = baralhoTruco[0]
        } else if (baralhoTruco[i] === carta) {
            manilha = baralhoTruco[i + 1]
        }
    }

    console.log(manilha)
}

solucao(oVira)