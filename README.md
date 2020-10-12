# es6features
Projeto para revisar features do es6

## instalacao de dependencias

Babel como dependência de dev

1 - usando o yarn, digite yarn add @babel/cli --dev

O babel cli permite que o babel seja rodado por linha de comando.

2 - agora digite yarn add @babel/core --dev

3 - agora digite yarn add @babel/preset-env -- dev

O preset-env é para o babel entender qual o ambiente que ele irá trabalhar. No caso do projeto, o ambiente é o browser. Com isso ele vai converter as features do ES6 e ES7 para os navegadores.

## configuração do babel

1 - crie um arquivo chamado .babelrc
2 - crie um objeto com o parâmetro
{
    "presets": ["@babel/preset-env"]
}

Agora é nececessário criar um arquivo bundle.js que vai transpilar o código ES6.
Para isso, no arquivo package.json crie um novo objeto "scripts"

"scripts":{
    "dev": "babel -w ./main.js -o ./bundle.js"
}

Agora execute o comando yarn dev e o arquivo será criado.

## configuração para usar features rest/spread

1 - execute o comando yarn add @babel/plugin-proposal-object-rest-spread --dev
2 - certifique-se de que o no arquivo .babelrc foi criado um novo parâmetro chamado plugin com o modulo que foi instalado

# configuração do webpack

O webpack permite trabalhar com vários arquivos js em uma aplicação

1 - execute o comando yarn add webpack webpack-cli --dev
2 - execute o comando yarn add babel-loader
3 - execute o comando yarn add webpack-dev-server --dev
3 - crie um arquivo de configuração do webpack chamado webpack.config.js
4 - crie uma pasta na raiz chamada src que guardará o código js e uma pasta chamada public que guardará o arquivo html
5 - crie a seguinte estrutura:

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use:{
                   loader:'babel-loader',
               }
           } 
        ]          
    },
};

explicando:

entry - recebe o arquivo que estamos usando para criar o código ES6, no caso o main.js
output - o destino onde todo o código js será transpilado. Essa propriedade recebe dois parâmetros
path: o caminho para chegar no arquivo
filename: o nome do arquivo 
devServer - 
module - essa propriedade recebe um parâmetro chamado rules que diz como o webpack deve se comportar quando está sendo importado novos arquivos JS
test: para verificar se o arquivo termina com a extensão .js. Cria-se uma expressão regular para fazer essa verificação
exclude: para excluir arquivos do processamento do loader
loader: toda vez que o usuário criar um arquivo js ele vai carregar o código sozinho com o loader especificado.

6 - no arquivo package.json altere o objeto scripts. na propriedade dev substitua por webpack-dev-server --mode=development para fazer o build em dev
7 - inclua no objeto scripts a propriedade build: webpack --mode=production para fazer o build de produção.

## trabalhando como async/await no babel

1 - execute o comando yarn add @babel/plugin-transform-async-to-generator
2 - execute o comando yarn add @babel/polyfill -D
3 - inclua no arquivo babel o plugin transform-async-to-generator
4 - inclua no arquivo de configuração do webpack o @babel/polyfill na propriedade entry, transformando a propriedade em um array e incluindo a configuração antes do caminho do arquivo .js para o babel/polyfill deve ser carregado primeiro.







