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

function sortearAmigo() {
// primero debe observar si el array está vacio 
    if (amigos.length === 0) {
        alert("No ha ingresado amigos para sortear");
    }
// generar un índice aleatorio, tengamos en cuenta varias cosas, 1. el math.random debe indicar valores del índice del array, 2.debemos usar el length ya que el valor del tamaño del array cambia
// en este caso no sumamos 1, debido a que math.random selecciona valores en 0 y 1, necesitamos el 0 pues 0 es el índice de un elemento
    let amigoSorteado = Math.floor(Math.random()*amigos.length);

// Acceder al amigo sorteado, lo que yo creo es que debo llamar al array en la posición de la nueva variable, ya que esta guarda el sorteo
    console.log(amigos[amigoSorteado]);
//aquí accedemos a la lista, y pintamos el amigo sorteado a través de innerHTML, pero en la aplicación que muestran los profes ellos esconden la lista de los nombres

    let listaSorteo = document.getElementById('resultado');
    listaSorteo.innerHTML = `El amigo secreto sorteado es ${amigos[amigoSorteado]}`;
// con este código lo que hacemos es hacer desaparecer la lista de la pantalla, debemos seguir practicando para entender todo
    document.getElementById('listaAmigos').style.display = "none";
}