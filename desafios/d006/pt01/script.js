let caixa = []

function adicionar(){
    let num = document.getElementById("txtn")
    let sel = document.getElementById("selres")
        n1 = Number(num.value)
    let opt = document.createElement("option")
    let ver = caixa.indexOf(num)
    num.value = ""

    if(n1 == ""){
        alert("Adicione um valor")
    } else{
        if(n1 > 100 || n1 < 1 || n1 == caixa[ver]){
            alert("[ERRO] o valor inserido é inválido")
        } else{
            caixa.push(n1)
            opt.text = `O valor ${n1} foi adicionado com sucesso!`
            sel.appendChild(opt)
        }
    }
}

function finalizar(){
    if(caixa == ""){
        alert("Por favor, insira um valor antes de finalizar")
    } else{
        let res = document.getElementById("res")

        caixa.sort(function(a, b) {
            return a - b;
          });

        let ver = 0
        for(let c = 0; c < caixa.length; c++){
            ver = ver + caixa[c]
        }

        res.innerHTML = ""
        res.innerHTML += `Ao todo, temos ${caixa.length} números cadastrados <br>`
        res.innerHTML += `O maior valor informado foi ${caixa[caixa.length - 1]}<br>`
        res.innerHTML += `O menor valor informado foi ${caixa[0]}<br>`
        res.innerHTML += `Somando todos os valores, temos ${ver}<br>`
        res.innerHTML += `A média de todos os valores digitados é ${ver/caixa.length}<br>`


    }
}
