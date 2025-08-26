// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosIngresados = [];

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo');
    if (amigoAgregado.value == ""){
        alert("Por favor, inserte un nombre");
    }else {
        amigosIngresados.push(amigoAgregado.value);
        console.log(amigosIngresados);
    }
    amigoAgregado.value = "";
    return;
}

