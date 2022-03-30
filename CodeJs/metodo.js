let Xa = 0; // valor positivo ou negativo gerado apos o calculo da função
let Xb = 0; // valor positivo ou negativo gerado apos o calculo da função

let a = parseFloat(document.getElementById("a").value); // valor inserido para formação da função A
let b = parseFloat(document.getElementById("b").value); // valor inserido para formação da função B
let c = parseFloat(document.getElementById("c").value); // valor inserido para formação da função C

let e = parseFloat(document.getElementById("precisao").value); // epslon oou prcisao da minha conta (ex: 0.001)
let parada = 1; // criterio de parada

let elevate = 2; // numero no qual a função é elevada

let listIntervalos = []; // array com os intervalos que dar raiz
let ListDefault = [] // aray com os intervalos descartados
let numero = [] // array de todos os intervalos
let list = []

// função que faz o calculo dos intervalos da funçao
function calcInterval() {
    for (let i = -6; i < 6; i++) {
        var k = i++
        while (elevate >= 1) {
            for (let j = 0; j < numero.length; j++) {
                Xa += numero[j] * (i ** (elevate))
                Xb += numero[j] * (k ** (elevate))

                //if que verifica quais numero deve ser substituido verificando se é positivo ou negativo
                if (Xa < 0 && Xb > 0) {
                    listIntervalos.push([i, k])

                    if (i < j) {
                        ListDefault.push([i, k])
                    } else if (i > j) {
                        ListDefault.push([j, k])
                    }

                } else if (Xa > 0 && Xb < 0) {
                    listIntervalos.push([k, i])

                    if (i < j) {
                        ListDefault.push([i, k])
                    } else if (i > j) {
                        ListDefault.push([j, k])
                    }
                }
                elevate--
            }
        }
    }
}

function calc() {


    for (let i = 0; i < listIntervalos.length; i++) {
        while (parada > e) {
            let aux = 0

            let mediaXaXb = (listIntervalos[i][0] + listIntervalos[i][1]) / 2

            for (let j = 0; j < numero.length; j++) {
                aux += numero[j] * (mediaXaXb ** (elevate))
                elevate--
            }

            if (aux > 0) {
                listIntervalos[i][1] = mediaXaXb
            } else if (aux < 0) {
                listIntervalos[i][0] = mediaXaXb
            }

            parada = Math.abs(listIntervalos[i][0] - listIntervalos[i][1])
        }

        list.push([(listIntervalos[i][0] + listIntervalos[i][1]) / 2])

        parada = 1
    }
}

