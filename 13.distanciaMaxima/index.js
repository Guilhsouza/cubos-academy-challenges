function processData(input) {

    const inputArray = input.trim().split("\n")
    let coordenadas = []

    for (let i = 1; i < inputArray.length; i++) {
        const coordenadasArray = inputArray[i].split(" ")
        coordenadas.push({
            x: parseFloat(coordenadasArray[0]),
            y: parseFloat(coordenadasArray[1])
        }
        )
    }

    let maiorResultado = 0

    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = i + 1; j < coordenadas.length; j++) {
            const x1 = coordenadas[i].x
            const x2 = coordenadas[j].x
            const y1 = coordenadas[i].y
            const y2 = coordenadas[j].y
            const resultado = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

            if (maiorResultado < resultado) {
                maiorResultado = resultado
            }
        }
    }
    console.log(maiorResultado)
}