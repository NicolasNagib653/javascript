
var display=document.getElementById("display1")
var numeros=document.getElementById("numeros")
var soma1=0
var n1,sub1,divi1,porcen1,multi1=0
var f=0
function add1(){
if(display.value==0){
display.innerHTML=1
numeros.innerHTML=1
}
else{
display.innerHTML=display.value+1
numeros.innerHTML=numeros.value+1
}
}
function add2(){

if(display.value==0){
display.innerHTML=2
numeros.innerHTML=2

}
else{
display.innerHTML=display.value+2
numeros.innerHTML=numeros.value+2

}
}
function add3(){

if(display.value==0){
display.innerHTML=3
numeros.innerHTML=3

}
else{
display.innerHTML=display.value+3
numeros.innerHTML=numeros.value+3
}
}
function add4(){
if(display.value==0){
display.innerHTML=4
numeros.innerHTML=4

}
else{
display.innerHTML=display.value+4
numeros.innerHTML=numeros.value+4
}
}
function add5(){

if(display.value==0){
display.innerHTML=5
numeros.innerHTML=5
}
else{
display.innerHTML=display.value+5
numeros.innerHTML=numeros.value+5
}
}
function add6(){

if(display.value==0){
display.innerHTML=6
numeros.innerHTML=6
}
else{
display.innerHTML=display.value+6
numeros.innerHTML=numeros.value+6
}
}
function add7(){
if(display.value==0){
display.innerHTML=7
numeros.innerHTML=7
}
else{
display.innerHTML=display.value+7
numeros.innerHTML=numeros.value+7
}
}
function add8(){

if(display.value==0){
display.innerHTML=8
numeros.innerHTML=8
}
else{
display.innerHTML=display.value+8
numeros.innerHTML=numeros.value+8
}
}
function add9(){

if(display.value==0){
display.innerHTML=9
numeros.innerHTML=9
}
else{
display.innerHTML=display.value+9
numeros.innerHTML=numeros.value+9
}
}

function add0(){

if(display.value==0){
display.innerHTML=0
numeros.innerHTML=0
}
else{
display.innerHTML=display.value+0
numeros.innerHTML=numeros.value+0
}
}

function limpar(){
display.innerHTML=0
numeros.innerHTML=0

}

function soma(){
display.value+="+"
numeros.value+="+"
}

function sub(){
display.value+="-"
numeros.value+="-"
}

function multi(){
display.value+="X"
numeros.value+="*"
}

function divi(){
display.value+="÷"
numeros.value+=`/`
}

function porcen(){
n1=display.value
display.value+="%"
porcen1=5
}

function parentE(){
if(display.value==0){
display.innerHTML="("
numeros.innerHTML="("
}
else{
display.value+="("
numeros.value+="("
}
}
function parentD(){
if(display.value==0){
display.innerHTML=")"
numeros.innerHTML=")"
}
else{
display.value+=")"
numeros.value+=")"
}
}

function igual(){
}