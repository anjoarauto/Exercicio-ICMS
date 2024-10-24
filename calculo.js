function calculo() {
    let valor = parseInt(prompt("Digite o valor do produto para calcular o valor com ICMS de SP"))
    let icms = valor * (18/100)
    let resultado = valor + icms
    alert("O valor do produto com o ICMS de São Paulo é : " + resultado)
}

calculo()
calculo()