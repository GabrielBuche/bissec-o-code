let Xa;  // valor positivo ou negativo gerado apos o calculo da função
let Xb;  // valor positivo ou negativo gerado apos o calculo da função
let Fx; // entrada da função
let e;
let media;


const intervalos = [];
const calcIntervalos = [];

const listPrincipal = []

const raizes = []

function calc() {
    Xa = document.getElementById("Xa").value;
    Xb = document.getElementById("Xb").value;
    Fx = document.getElementById("Fx").value;
    for (let i = Xa; i <= Xb; i++) {
        intervalos.push(Xa)
        calcIntervalos.push(eval(Fx.replaceAll("x", i)))

    }
}

function verificarSinal() {
    for (let i = 0; i <= calcIntervalos.length; i++) {
        if (calcIntervalos[i] > 0 && calcIntervalos[i + 1] < 0 || calcIntervalos[i] < 0 && calcIntervalos[i + 1] > 0) {
            listPrincipal.push([calcIntervalos[i], calcIntervalos[i + 1]])
        }
    }
}

function bisseccao() {

    e = parseFloat(document.getElementById("precisao").value);
    let a;
    let b;
    listPrincipal.map((item) => {
        a = item[0];
        b = item[1]
        do {
            media = (a + b) / 2;
            if (a > 0 && media > 0 || a < 0 && media < 0) {
                a = media;
            }
            if (b > 0 && media > 0 || b < 0 && media < 0) {
                b = media
            }
        } while ((a - b) < e)
        raizes.push({a, b})
    })
}

function calcTotal() {
    calc();
    verificarSinal();
    bisseccao()
}

document.getElementById("calcular").addEventListener('click', calcTotal)