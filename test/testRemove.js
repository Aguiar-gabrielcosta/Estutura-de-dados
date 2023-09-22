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

// Teste .remove(index)
lista.remove(3)
lista.print()
lista.remove(0)
lista.print()
lista.remove(-1)
lista.print()
lista.remove(8)
lista.print()
lista.remove(5)
lista.print()
console.log(lista)

