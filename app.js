// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // amigoAgregado es el nombre que le damos a la variable que almacena el "Objeto" de HMTL, también podría llamarse input ya que ese es el objeto al que accedemos 
    let amigoAgregado = document.getElementById('amigo');
    // la siguiente linea crea una variable que contiene no el objeto sino el valor dentro del objeto, al aplicar .trim quitamos los espacios que se agregan por defecto en el input " juan " => "juan"
    const nombre = amigoAgregado.value.trim();
    
    if (amigoAgregado.value == ""){
        alert("Por favor, inserte un nombre");
        // La siguiente linea permite que el cursor permanezca dentro de la caja del input sin tener que darle click
        amigoAgregado.focus();
    }

    amigos.push(nombre);

    actualizarLista();
    limpiarCaja();

    return;
    amigoAgregado.focus();
}


function limpiarCaja() {
    let caja = document.querySelector('input');
    caja.value = "";
}

function actualizarLista() {
    //primero accedemos al objeto lista, este es un <Ul> de HTML
    let lista = document.getElementById('listaAmigos');
    //luego limpiamos
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++ ) {
    // En esta parte me ayude con chatGPT para poder encontrar tres elementos nuevos y necesarios, el primero es crear elementos, es necesario para poder agregar los nombres como <li></li>
        let nuevoLi = document.createElement('li');
    // El segundo es textContent, que al igual que innerHTML permite acceder al contenido del objeto, pero no lo trae como contenido HTML, lo hace únicamente como texto
        nuevoLi.textContent = amigos[i];
    // el siguiente es un método que permite agregar un nodo hijo dentro de un nodo padre, los nodos son las derivaciones del HTML cuando lo observamos desde el DOM
    // lo que estamos haciendo es agregando los nuevos "li" dentro del objeto <Ul> que llamamos previamente
        lista.appendChild(nuevoLi);
    }

}