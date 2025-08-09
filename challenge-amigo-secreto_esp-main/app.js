// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Primero definimos nuestro arreglo
let nombres_arreglo = [];

//creamos la funcion donde se capturan los nombres ingresados en la caja de texto
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // apuntamos por id el espacio en memoria
    let nombre = inputAmigo.value.trim();

    if(nombre.trim() === ''){
        alert("Porfavor, ingrese un nombre.");
        return;
    }
    nombres_arreglo.push(nombre);
    inputAmigo.value = '';

    listarAmigosEnPantalla();

}

function listarAmigosEnPantalla(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0 ; i < nombres_arreglo.length ; i++){
        let li = document.createElement('li');
        li.textContent = nombres_arreglo[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(nombres_arreglo.length === 0){
        alert("Debe de haber por lo menos un nombre para realizar el sorteo");
        return;
    }

    //Debemos obtener el rango en el que trabajara el aleatorio
    let numeroAleatorio = Math.floor(Math.random() * nombres_arreglo.length);
    let amigoSorteado = nombres_arreglo[numeroAleatorio];

    mostrarResultado(amigoSorteado)
}

function mostrarResultado(nombre){
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    let li = document.createElement('li');
    li.innerHTML = `<b>${nombre}</b>`;

    resultado.appendChild(li);
}