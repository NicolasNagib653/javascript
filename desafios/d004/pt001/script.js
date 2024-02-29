function contar(){
    var inicio = document.getElementById('inicio')
    var fim    = document.getElementById('fim')
    var passo  = document.getElementById('passo')
    var res    = document.getElementById('res')
    var c = inicio.value

  let i = Number(inicio.value)
  let f = Number(fim.value)
  let p = Number(passo.value)

  for(let c = i; i <= f; i = i + p){
    res.innerHTML += `${i}...`
  }
}