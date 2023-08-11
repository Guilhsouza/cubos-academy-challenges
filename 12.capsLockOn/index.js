function processData(input) {
    //Enter your code here
    let palavrasSeparadas = input.split(" ")

    for (let palavra of palavrasSeparadas) {
        const palavraInteira = palavra.substring(0, palavra.length)
        const primeiraLetra = palavra.substring(0, 1)
        const palavraSemPrimeiraLetra = palavra.substring(1, palavra.length)

        if (primeiraLetra === primeiraLetra.toLowerCase() && palavraSemPrimeiraLetra === palavraSemPrimeiraLetra.toUpperCase()) {
            console.log(primeiraLetra.toUpperCase() + palavraSemPrimeiraLetra.toLowerCase())
        } else if (palavraInteira === palavraInteira.toUpperCase()) {
            console.log(palavraInteira.toLowerCase())
        } else {
            console.log(palavra)
        }
    }
}

let input = "cAPS"

processData(input)