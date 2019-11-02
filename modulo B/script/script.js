//Formatando núneros, aritméticos e atribuição.
const n1 = 1543.5
n1.toFixed(2)
n1.toFixed(2).replace('.',',')
n1.toLocaleString('pr-BR', {style: 'currency',currency:'BRL'})

//Converter moeda de Real para Dollar e Dollar para Euro..
var n = 1888.0
n.toFixed(2)
// '1888.90'
 n.toFixed(2).replace('.', ',')
// '1888,90'
n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// 'R$ 1.888.90'
n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
'US$ 1.888,90'
n.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' })
'€ 1.888,90'

//Aula de operadores de relacionais, lógicos, ternário.
//< > >= <= == !=
