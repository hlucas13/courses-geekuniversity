// Operadores relacionais

/*
Os operadores mais comuns são:

Igual a: ==
Diferente de: !=
Igual e do mesmo tipo que: ===
Diferente e de outro tipo que: !==

Maior que: >
Menor que: <
Maior ou igual a: >=
Menor ou igual a: <=
*/

var n1 = 54,
    n2 = 78;

console.log(n1 == n2); // false
console.log(n1 != n2); // true
console.log(n1 === n2); // false
console.log(n1 !== n2); // true
console.log(n1 > n2); // false
console.log(n1 < n2); // true
console.log(n1 >= n2); // false
console.log(n1 <= n2); // true

if (n1 > n2) {
    console.log('N1 é maior que N2');
} else {
    console.log('N1 é menor que N2');
}
