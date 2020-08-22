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

    usaMap(arr){
        let novoArray = arr.map(numero =>{
            return numero * 2;
        }); 
        return novoArray;
    }

    usaForEach(arr){
        arr.forEach(numero => console.log(numero));
    }

    usaFilter(arr){
        let novoArray;
        novoArray = arr.filter(numero => numero > 2);
        return novoArray;
    }

    usaFind(arr){
        let novoArray;
        novoArray = arr.find(numero => numero === 2);
        return novoArray;
    }

    usaEvery(arr){
        let isAllGraterThanZero;
        isAllGraterThanZero = arr.every(numero => numero > 0);
        return isAllGraterThanZero;
    }

    usaSome(arr){
        let someMinorThanZero;
        someMinorThanZero = arr.some(numero => numero < 0);
        return someMinorThanZero;
    }

    usaReduce(arr){
        let soma;
        soma = arr.reduce((total, numero) => total += numero);
        return soma;

    }



}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    const arr = [1,2,3];
    console.log("Usando o foreach");
    MinhaLista.usaForEach(arr);
    console.log("Usando o map - "+ MinhaLista.usaMap(arr));
    console.log("usando o filter - "+ MinhaLista.usaFilter(arr));
    console.log("usando o find - "+ MinhaLista.usaFind(arr));
    console.log("usando o every - "+ MinhaLista.usaEvery(arr));
    console.log("usando o some - "+ MinhaLista.usaSome(arr));
    console.log("usando o reduce - "+ MinhaLista.usaReduce(arr));
    
}