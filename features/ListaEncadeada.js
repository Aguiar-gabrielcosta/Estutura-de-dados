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

    insert(index=(this.count-1), element=undefined){ // Inserir elemento (ou nenhum um espaço undefined) no index definido (ou no último espaço)
        const node = new Node(element)
        if (index <= 0){ // Caso o index for 0 ou menor, adiciona um novo header
            node.next = this.header
            this.header = node
            this.count++
        } else if (index >= (this.count-1)){ // Caso o indes for o último elemento ou "maior", usa o método add
            this.add(element)
        } else { // Nos casos intermediários, faz o anterior a inserção referenciar ao novo nodo, e o nodo novo referênciar ao próximo
            let previous = this.header
            let current = previous.next
            for (let cc = 1; cc < index; cc++) {
                previous = previous.next
                current = current.next
            }
            previous.next = node
            node.next = current
            this.count++
        }
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

    remove(index){
        if (index < 0 || index > (this.count-1)){ // Verificar se o index é válido
            console.error('Invalid index!');
        } else if (index === 0){ // Se a remoção é do cabeça, basta trocar o elemento cabeça para o próximo
            let aux = this.header
            this.header = aux.next
            this.count--
        } else { // No resto dos casos, o elemento anterior passa a referênciar o próximo
            let previous = this.header
            let current = this.header.next
            for (let cc = 1; cc < index; cc++){
                previous = previous.next
                current = current.next
            }
            previous.next = current.next
            if (index === (this.count-1)){ // Se o elemento removido era o tail, o tail passa a referenciar o anterior ao antigo tail
                this.tail = previous
            }
            this.count--
        }
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
            let current = this.header;
            while (current !== null) { // Navega pelos elementos da lista
                if (current.element === element) { // Se o elemento atual for o elemento procurado, retorna true
                    return true
                } else {
                    current = current.next
                }
            }
            return false
        }
    }

    indexOf(element){
        if (this.count === 0){
            console.error(`Element is not in the list`);
        } else {
            let current = this.header;
            let currentIndex = 0
            while (current !== null) { // Navega pelos elementos da lista
                if (current.element === element) { // Se o elemento atual for o procurado, retornar o index
                    return currentIndex
                } else { // Do contrário, passa para o próximo elemento e corrige o index
                    current = current.next
                    currentIndex++
                }
            }
            console.error(`Element is not in the list`);
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