var num = [5, 8, 1, 2]
num.push(13)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(num.length)

/*for (var c = 0; c < num.length; c = c + 1) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
} 

for ( var c in num) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
} */

console.log(num.indexOf(13))