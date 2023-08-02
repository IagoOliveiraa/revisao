//criar variavel 

let none = "Sammy gonçalves"
let idade = 23 
let idadeEsposa = 29
const anoNacimento = 1999 

//decisao

if (idade == idadeEsposa){
    alert("igual...")

}else{
    alert("cada um no seu quadrado")
}

//lendo info do html

const titulo = document.getElementById("titulo")
const resultado = document.getElementById("resultado")

const Nome = document.getElementById("nome")
const Email = document.getElementById("email")

titulo.textContent = "Mudei o titulo"



function mostraresultado() {

    titulo.style.color = "Blue"
    titulo.style.borderRadius = "10px"
    titulo.style.padding = "10px"

    resultado.textContent  = nome.value + "" + Email.value

}