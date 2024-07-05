// realiza un calculo con 2 input

// variables
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const resultado = document.querySelector("#resultado");
const boton = document.querySelector("#calcular");

// Funciones
function sumar() {
    // Capturamos los numeros de los <input>s, convertimos a Int y guardamos en variables
    const numeroASumarPrimero = parseInt(numero1.value);
    const numeroASumarSegundo = parseInt(numero2.value);
    // Calculo
    const total = numeroASumarPrimero + numeroASumarSegundo;
    // Mostramos el resultado
    resultado.textContent = total;
}

// Eventos
boton.addEventListener("click", sumar);
