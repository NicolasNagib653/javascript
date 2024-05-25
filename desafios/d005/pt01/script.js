function calcular() {
    var num = document.getElementById("n1")
    var tab = document.getElementById("t1")
    var res = document.getElementById("res")
    var sel = document.createElement("select")


    var n1 = Number(num.value)
    var t1 = Number(tab.value)
    console.log(t1)
    res.innerHTML = "calculando:<br>"
    res.appendChild(sel)

    for (let c = 1; c <= t1; c++) {
        sel.innerHTML += `<option> ${n1} X ${c} = ${n1 * c}</option>`
        sel.size = 10
    }
}