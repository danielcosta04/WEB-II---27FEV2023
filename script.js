//OPERADORES LÓGICOS - && (e),  ||,  !(não)

// console.log(2 < 3 && 3 > 2)
// console.log(2 < 3 && 3 < 2)
// console.log(2 < 3 && 3 > 2 && 10 < 100)
// var j = +(prompt('Digite um valor'))
// document.write(`<br> O valor está no intervalo desejado?<br>${j>0 && j<10}`)

//exemplo de ou ||
// console.log(2 < 3 || 3 > 2)
// console.log(2 < 3 || 3 < 2)
// console.log(2 < 3 || 3 > 2 || 10 < 100)

// document.write(`<br> O valor está no intervalo desejado?<br>${j>0 || j<10}`)


//Exemplo ! (não)

// console.log(2 < 3)
// console.log(!(2 < 3))
// console.log(!!(2 < 3))

// //Math (matemática)

// //abs () - para transformar um número negativo em positivo

// const n1 = Math.abs(-20)
// document.write('<br>O valor absoluto é')
// document.write(`<br>O valor absoluto é ${n1}`)
// console.log(`O valor absoluto é ${n1}`)
// alert(`O valor absoluto é ${n1}`)

// document.write(`<br>O valor absoluto é ${Math.abs(-20)}`)
// document.write(`<br>O valor absoluto é ${Math.abs(null)}`)
// document.write(`<br>O valor absoluto é ${Math.abs('')}`)
// document.write(`<br>O valor absoluto é ${Math.abs({})}`)
// document.write(`<br>O valor absoluto é ${Math.abs()}`)
// document.write(`<br>O valor absoluto é ${Math.abs([3])}`)

// n2 = Number(prompt('<br>Digite um valor negativos'))
// document.write(`<br>O valor absoluto é ${Math.abs(n2)}`)

// n3 = Math.pow(2, 5)
// document.write('<br>O valor elevado é ', n3)
// document.write(`<br>O valor elevado é ${n3}`)
// document.write(`<br>O valor elevado é ${Math.pow(5, 3)}`)
// alert(`<br>O valor elevado é , ${Math.pow(5, 3)}`)

// base = parseFloat(prompt('<br>Digite o valor desejado'))
// pot = +(prompt('Digite o valor desejado'))

// res = Math.pow(base,pot)
// document.write('<br>O valor elevado é ', res)
// document.write(`<br>O valor elevado é ${res}`)
// document.write(`<br>O valor elevado é ${Math.pow(base,pot).toFixed(2)}`)

//max() - ára buscar o maior valor

// n4 = Math.max(0,20,3,48,-8)
// document.write('<br>O maior valor é ', n4)
// document.write(`<br>O maior valor é ${n4}`)

// //min() - para buscar o maior valor
// n4 = Math.min(0,20,3,48,-8)
// document.write('<br>O menor valor é ', n4)
// document.write(`<br>O menor valor é ${n4}`)

//Exemplo recebendo valores externos

// 1 - num1 = +(prompt(Digite o valor de n1))
// 2 - num2 = +(prompt(Digite o valor de n2))
// 3 - num3 = +(prompt(Digite o valor de n3))
// 4 - num4 = +(prompt(Digite o valor de n4))
// 5 - num5 = +(prompt(Digite o valor de n5))

// document.write(`<br>O valor é ${Math.min(num1,num2,num3,num4,num5)}`)
// document.write(`<br>O valor é ${Math.max(num1,num2,num3,num4,num5)}`)

// round() - arredonda matematicamente

var num6 = parseFloat(prompt('digite o V.'))

document.write(`<br>O valor é ${Math.round(num6)}`)

//ceil() - arredonda obrigatóriamente para cima

document.write(`<br>O arredonda para cima valor é ${Math.ceil(num6)}`)

//floor() - para baixo
document.write(`<br>O valor é ${Math.floor(num6)}`)



