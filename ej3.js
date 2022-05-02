//document.getElementById('boton1').addEventListener('click',function(){
//    let color = document.getElementById('resultado');
//    color.style.color = "#fff";
// const color = document.getElementById('color-u');
// color.setAttribute('style','color:#af4d38;');
//    color.style.color = "#fff";
//});

//let color = document.querySelector('boton1');
//color.style.color = "#af4d38";

let fondo = document.getElementById("primer1");

fondo.addEventListener("click",myFondo);

function myFondo(){

    let element = document.getElementById("resultado");

    element.style.background= "#F8360D";

}

let tamanio = document.getElementById("segund2");

tamanio.addEventListener("click",myTamanio);

function myTamanio(){

    let element = document.getElementById("resultado");

    element.style.fontSize = "50px";

}