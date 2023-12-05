
var numeros = document.getElementById("numeros")
var soma1 = 0
var n1, sub1, divi1,porcen1,multi1   = 0
function add1(){
    if(numeros.value == 0){
        numeros.innerHTML =  1
    }
    else{
    numeros.innerHTML = numeros.value + 1
    }
}
function add2(){
    
    if(numeros.value == 0){
        numeros.innerHTML =  2
    }
    else{
    numeros.innerHTML = numeros.value + 2
    }
}
function add3(){
   
    if(numeros.value == 0){
        numeros.innerHTML =  3
    }
    else{
    numeros.innerHTML = numeros.value + 3
    }
}
function add4(){
    if(numeros.value == 0){
        numeros.innerHTML =  4
    }
    else{
    numeros.innerHTML = numeros.value + 4
    }
}
function add5(){
    
    if(numeros.value == 0){
        numeros.innerHTML =  5
    }
    else{
    numeros.innerHTML = numeros.value + 5
    }
}
function add6(){
   
    if(numeros.value == 0){
        numeros.innerHTML =  6
    }
    else{
    numeros.innerHTML = numeros.value + 6
    }
}
function add7(){
    if(numeros.value == 0){
        numeros.innerHTML = 7
    }
    else{
    numeros.innerHTML = numeros.value + 7
    }
}
function add8(){
    
    if(numeros.value == 0){
        numeros.innerHTML = 8
    }
    else{
    numeros.innerHTML = numeros.value + 8
    }
}
function add9(){
   
    if(numeros.value == 0){
        numeros.innerHTML =  9
    }
    else{
    numeros.innerHTML = numeros.value + 9
    }
}
function add9(){
    if(numeros.value == 0){
        numeros.innerHTML =  9
    }
    else{
    numeros.innerHTML = numeros.value + 9
    }
}
function add0(){
    
    if(numeros.value == 0){
        numeros.innerHTML =  0
    }
    else{
    numeros.innerHTML = numeros.value + 0
    }
}

function limpar(){
    numeros.innerHTML = 0
}

function soma(){
    n1 = numeros.value 
    numeros.value += "+"
    soma1 = 1
}

function sub(){
    n1 = numeros.value
    numeros.value += "-"
    sub1 = 2
}

function multi(){
    n1 = numeros.value
    numeros.value += "X"
    multi1 = 3
}

function divi(){
    n1 = numeros.value
    numeros.value += "÷"
    divi1 = 4
}

function porcen(){
    n1 = numeros.value
    numeros.value += "%"
    porcen1 = 5
}

function parentE(){
    if(numeros.value == 0){
        numeros.innerHTML =  "("
    }
    else{
        numeros.value += "("
    }
    resp = 6
}
function parentD(){
    if(numeros.value == 0){
        numeros.innerHTML =  ")"
    }
    else{
        numeros.value += ")"
    }
}

function igual(){
    if(soma1 == 1){
        let str = String(numeros.value)
        let n2 = str.split("+")
        numeros.innerHTML = Number(n1) + Number(n2[1])
    }else
    if(sub1 == 2){
        let str = String(numeros.value)
        let n2 = str.split("-")
        numeros.innerHTML = Number(n1) - Number(n2[1])
    }else
    if(multi1 == 3){
        let str = String(numeros.value)
        let n2  = str.split("X")
        numeros.innerHTML = Number(n1) * Number(n2[1])
    }
    if(divi1 == 4){
        let str = String(numeros.value)
        let n2  = str.split("÷")
        numeros.innerHTML = Number(n1) / Number(n2[1])
    }
    if(porcen1 == 5){
        let str = String(numeros.value)
        let n2  = str.split("%")
        console.log(n2)
        if(n2[1] == ""){
            numeros.innerHTML = parseFloat(n1) / 100
        } else{
        numeros.innerHTML = parseFloat(n1) * parseFloat(n2[1]) / 100
        }
    }

}