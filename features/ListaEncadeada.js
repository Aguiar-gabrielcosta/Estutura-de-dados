import Node from "./Node.js";

export class ListaEncadeada {
    constructor() {
        this.count = 0;
        this.header = null;
        this.tail = null;
    }

    add(element){
        const node = new Node(element) // Cria um nodo com o elemento solicitado
        let currentLast;
        if (this.count == 0) {
            this.header=this.tail=node; // Se é o primeiro nodo adicionado, ele é o header e o tail
        } else {
            currentLast = this.header;
            while (currentLast.next !== null) { // Laço que procura o último nodo
                currentLast = currentLast.next
            }
            currentLast.next = node // Adiciona um nodo por último
            this.tail = node // Tail passa a referencial esse último nodo adicionado
        }
        this.count++
    }

    get(index){
        if (index < 0 || index > (this.count-1)){ // Verificar se o index é válido
            console.error('Invalid index!');
        } else {
            let aux = this.header
            for (let cc = 0; cc<index; cc++){ // Navega até o index
                aux = aux.next
            }
            return aux.element // Retorno do elemento com o index
        }
    }

    set(index, element=undefined){
        if (index < 0 || index > (this.count-1)){ // Verificar se o index é válido
            console.error('Invalid index!');
        } else {
            let aux = this.header
            for (let cc = 0; cc<index; cc++){ // Navega até o index
                aux = aux.next
            }
            aux.element = element // Subistitui o elemento
        }
    }

    remove(element){

    }

    isEmpty() { 
        if (this.count === 0){ // Se não tiver elementos, retorna ture, se não false.
            return true
        } else {
            return false
        }
    }

    size(){ // Retorna a contagem de elementos
        return this.count
    }

    contains(element){
        if (this.count === 0){
            return false
        } else {
            current = this.header;
            while (current.next !== null) { // Navega pelos elementos da lista
                if (current === element) { // Se o elemento atual for o elemento procurado, retorna true
                    return true
                } else {
                    current = currentLast.next
                }
            return false
            }
        }
    }

    indexOf(element){
        if (this.count === 0){
            console.error(`Element is not in the list`);
        } else {
            current = this.header;
            currentIndex = 0
            while (current.next !== null) { // Navega pelos elementos da lista
                if (current === element) { // Se o elemento atual for o procurado, retornar o index
                    return currentIndex
                } else { // Do contrário, passa para o próximo elemento e corrige o index
                    current = currentLast.next
                    currentIndex++
                }
            console.error(`Element is not in the list`);
            }
        }
    }

    print(){
        var aux = this.header
        let msg = `####################################################`
        while(aux!=null){
            msg += `\n${aux.element}`
            aux=aux.next
        }
        msg += `\n####################################################`
        console.log(msg)
    }

    clear(){ // Volta aos parâmetros iniciais do construtor
        this.count = 0;
        this.header = null;
        this.tail = null;
    }
}