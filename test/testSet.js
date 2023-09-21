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

// Teste .set(index, element)
let item5 = lista.set(3, 'Elemento Novo 1')
let item6 = lista.set(-2, 'Elemento Novo 2')
let item7 = lista.set(0)
let item8 = lista.set(8)
lista.print()