


document.getElementById("boton").addEventListener('click', function (){
    console.log("Espero que les guste mi CV");
    document.getElementById("demo").innerHTML = "evelyn@gmail.com"
})

document.getElementById("boton_ocultar").addEventListener('click', function (){
    document.getElementById('demo').style.display = 'none';
})

document.getElementById('sumar'),addEventListener('click', function (){
    let numero1 = document.getElementById('numero1').value;
    console.log('El valor del numero 1 es: '+numero1)
    let numero2 = document.getElementById('numero2').value;
    console.log('El valor del número 2 es: '+numero2)

    let resultado = sumar(parseInt(numero1),parseInt(numero2));
    console.log('El resultado es mi número de celular: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorresultado').style.display = 'block';
});


function sumar (a,b){
    return a + b
}
//Hola Daniel! No pude sacar esa leyenda "NaN" que aparece cuando cliqueas para escribir los números
