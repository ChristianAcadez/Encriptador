function validatingEnc(){

    var texto = document.getElementById("addText").value;
    if(texto === null || texto === ""){
        alert("Debes ingresar palabras para encriptar");
    }else{
        encrypting(texto);
    }

}


function encrypting(texto){

    //Se crean las constantes de la imagen y el area de texto en donde se encrptara y desencriptaran los datos
    const text = document.querySelector(".textoEncriptado");
    const imagen = document.querySelector(".image");


    //Se cambia la visibilidad de los objetos para que se muestren o no
    text.style.display = "initial";
    imagen.style.display = "none";

    //para facilitar la encriptacion se pasan todos los caracteres a minusculas, se separan y se crea una variable array en donde se guardara el texto encriptado
    let textoLowerCase = texto.toLowerCase();
    let encript = textoLowerCase.split('');
    let encripted = [];

    //en este ciclo se se revisan los caracteres que se van a codificar y se agregan, los que no cambia se agregan igual
    for(var i=0;i<=encript.length;i++){
        if(encript[i] == 'a'){
            encripted.push("ai");
        }else if(encript[i] == 'e'){
            encripted.push("enter");
        }else if(encript[i] == 'i'){
            encripted.push("imes");
        }else if(encript[i] == 'o'){
            encripted.push("ober");
        }else if(encript[i] == 'u'){
            encripted.push("ufat");
        }else{
            encripted.push(encript[i]);
        }
    }

    //finalmente se el resultado se convierte en string y se borran las comas, y ese resultado se muestra en el html
    text.innerHTML = encripted.join('');

}


function dencrypting(){
    var texto = document.getElementById("addText").value;
    const text = document.querySelector(".textoEncriptado");

    let textoSinOber = texto.replaceAll("ober", "o");
    let textoSinAi = textoSinOber.replaceAll("ai", "a");
    let textoSinEnter = textoSinAi.replaceAll("enter", "e");
    let textoSinImes = textoSinEnter.replaceAll("imes", "i");
    let textoDesencriptado = textoSinImes.replaceAll("ufat", "u");

    text.innerHTML = textoDesencriptado;
}