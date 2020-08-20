class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
    }


}


class TodoList extends List {
    constructor(){
        super();

        this.usuario = 'Alexandre';
    }


    mostraUsuario(){
        console.log(this.usuario);
    }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
    console.log(MinhaLista.data);
    MinhaLista.mostraUsuario();
}