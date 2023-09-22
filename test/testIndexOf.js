import { ListaEncadeada } from '../features/ListaEncadeada.js'

var lista = new ListaEncadeada

// Lista inicial
lista.add('Elemento 1')
lista.add('Elemento 2')
lista.add('Elemento 3')
lista.add('Elemento 4')
lista.add('Elemento 5')
lista.add('Elemento 6')
lista.add('Elemento 7')
lista.add('Elemento 8')
lista.print()

// Teste .indexOf(element)

console.log(lista.indexOf('Elemento 3'));
console.log(lista.indexOf('Elemento 9'));
console.log(lista.indexOf('Elemento Novo'));
lista.add('Elemento Novo')
console.log(lista.indexOf('Elemento Novo'));
lista.remove(2)
lista.print()
console.log(lista.indexOf('Elemento 3'));

