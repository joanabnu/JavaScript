let num = [5, 8, 9, 0, 3]
num.push(7)
num.sort()
console.log(`Nossa vetor ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O VETOR TEM ${num.length} posiçoes`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`nao foi emcontrado`)
}else{
    console.log(`${pos}`)
}
console.log(`O valor 8 esta na posição ${pos}`)
