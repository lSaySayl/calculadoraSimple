let sumarNumero = () => {
    let numeroUno = document.querySelector(`#numeroUno`);
    let numeroDos = document.querySelector(`#numeroDos`);
    let resultado = document.querySelector(`#resultado`);

    resultado.value = parseFloat(numeroUno.value) + parseFloat(numeroDos.value);

}

let restarNumero = () => {
    let numeroUno = document.querySelector(`#numeroUno`);
    let numeroDos = document.querySelector(`#numeroDos`);
    let resultado = document.querySelector(`#resultado`);
    resultado.value = parseFloat(numeroUno.value) - parseFloat(numeroDos.value);

}


let multiplicarNumero = () => {
    let numeroUno = document.querySelector(`#numeroUno`);
    let numeroDos = document.querySelector(`#numeroDos`);
    let resultado = document.querySelector(`#resultado`);
    resultado.value = parseFloat(numeroUno.value) * parseFloat(numeroDos.value);
}


let dividirNumero = () => {
    let numeroUno = document.querySelector(`#numeroUno`);
    let numeroDos = document.querySelector(`#numeroDos`);
    let resultado = document.querySelector(`#resultado`);

    if(parseFloat(numeroDos.value) === 0) {
        resultado.value = "No se puede dividir por cero"
    } else {
        resultado.value = parseFloat(numeroUno.value) / parseFloat(numeroDos.value);
    }
    



}