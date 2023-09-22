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

// Teste .insert(index, element)
lista.insert(-1,'Elemento Novo 1')
lista.print()
lista.insert(0,'Elemento Novo 2')
lista.print()
lista.insert(3,'Elemento Novo 3')
lista.print()
lista.insert(13,'Elemento Novo 4')
lista.print()
lista.insert(11,'Elemento Novo 5')
lista.print()
lista.clear()
lista.insert(3,'Elemento Novo 6')
lista.print()
lista.insert(2)
lista.print()
lista.insert()
lista.print()

