import api from './api'

class App {
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerHandlers();
    }


    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepositories(event);
    }

    async addRepositories(event){
        event.preventDefault();

        const userInput = this.inputEl.value;

        if(userInput.length === 0 )
            return;

        const response = await api.get(`users/${userInput}/repos`);
        
        console.log(response.data[0]);

        const {name, description, html_url, owner: {avatar_url}} = response.data[0]


        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        this.inputEl.value = '';

        this.render();
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        })

    }
}

new App();