function contar() {
  var inicio = document.getElementById('inicio')
  var fim = document.getElementById('fim')
  var passo = document.getElementById('passo')
  var res = document.getElementById('res')
  var c = inicio.value

  

  let ini = Number(inicio.value)
  let fin = Number(fim.value)
  let pas = Number(passo.value)

  if(pas == 0){
    pas = 1
  }

  if (inicio.value == "" || fim.value == ""){
    res.innerHTML = "Não é possivel realizar a contagem de passos, pois um ou mais campos está vazio"
  } else{
    if (ini < fin) {
      for (let c = ini; ini <= fin; ini = ini + pas) {
        res.innerHTML += `${ini}... `
      }
    } else if (ini > fin) {
      for (let c = ini; ini >= fin; ini = ini - pas) {
        res.innerHTML += `${ini}... `
      }
    }
  }
}