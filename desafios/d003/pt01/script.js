function calcular(){
    var nasc   = document.getElementById('nasc')
    var res    = document.getElementById('res')
    var masc   = document.getElementById('masc')
    var fem    = document.getElementById('fem')
    var ano    = new Date().getFullYear()

    var idade = Number(ano) - Number(nasc.value)
    
    if(masc.checked){
        res.innerHTML = `Detectamos um Homem com ${idade} anos`
    } else 
    if (fem.checked){
        res.innerHTML = `Detectamos uma Mulher com ${idade} anos`
    }  
}