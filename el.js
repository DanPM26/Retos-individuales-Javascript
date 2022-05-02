document.getElementById('boton1').addEventListener('click', function(e){
    const encabezado = document.getElementById('sal').innerHTML = ` <h1>Hola</h1>`;
});

document.getElementById('boton2').addEventListener('click', function(e){
    const encabezado = document.getElementById('par').innerHTML = ` <p>Esta propiedad fue inicialmente implementada por navegadores web, y luego especificada por el WHATWG y el W3C en HTML5.</p>`;
});

document.getElementById('boton3').addEventListener('click', function(e){
  const mensaje = prompt('Ingresa tu nombre');
  alert(mensaje);
});




