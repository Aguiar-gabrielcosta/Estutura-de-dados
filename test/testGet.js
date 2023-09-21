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

// Teste .get(index)
let item1 = lista.get(3)
let item2 = lista.get(-2)
let item3 = lista.get(0)
let item4 = lista.get(8)
console.log(item1,item2,item3,item4)
