function solucao(texto) {
    const textoSemEspacos = texto.trim()
    const textoSeparado = textoSemEspacos.split(" ")

    const textoSemEspacosNoMeio = textoSeparado.filter((espacos) => {
        return espacos !== ""
    })

    console.log(textoSemEspacosNoMeio)
}

const texto = " Um texto cara a aa c 1                  3   "

solucao(texto)