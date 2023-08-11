function solucao(min, km) {
    //seu codigo aqui
    const valorAte20min = 20 * 50
    const valorAte10km = 10 * 70

    let descontoNosKilometros = 0
    let descontoNosMinutos = 0

    let valorTotalEmMinuto = 0
    let valorTotalEmKm = 0

    if (min > 20) {
        let valoresAcimaDe20min = min - 20
        descontoNosMinutos = valoresAcimaDe20min * 30
        valorTotalEmMinuto = valorAte20min + descontoNosMinutos
    }
    if (km > 10) {
        let valoresAcimaDe10km = km - 10
        descontoNosKilometros = valoresAcimaDe10km * 50
        valorTotalEmKm = valorAte10km + descontoNosKilometros
    }

    if (min > 20 && km > 10) {
        console.log(valorTotalEmKm + valorTotalEmMinuto)
    } else if (min > 20 && km < 10) {
        console.log(valorTotalEmMinuto + (km * 70))
    } else if (min < 20 && km > 10) {
        console.log(valorTotalEmKm + (min * 50))
    } else {
        console.log((min * 50) + (km * 70))
    }
}
const min = 25
const km = 11.5

solucao(min, km)