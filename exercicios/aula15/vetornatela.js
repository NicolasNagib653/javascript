let valores = [5,8,1,6,9,2,]
valores.sort()
// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}