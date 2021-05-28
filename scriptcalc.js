
    var teste = new Audio();
    teste.src = "bep.mp3"

function insert(num){
 var numero = document.getElementById("res").innerHTML 
 document.getElementById("res").innerHTML = numero + num
}
function limpar(){
    document.getElementById("res").innerHTML = ""
}   
function back(){
    var resultado = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = resultado.substring(0,resultado.length -1)
}
function calcular()
{
    var resultado = document.getElementById("res").innerHTML
    if(resultado)
    {
        document.getElementById("res").innerHTML = eval(resultado).toFixed(2)
    }else{
        document.getElementById("res").innerHTML = alert("não há nada para calcular")
    }
}