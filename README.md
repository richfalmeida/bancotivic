# Bancotivic
Projeto simples de uma conta bancária com as seguintes funcionalidades:
CONSULTAR SALDO;
REALIZAR DEPOSITO; 
REALIZAR SAQUE;
CADASTRAR-SE;
E REALIZAR LOGIN;  

Projeto desenvolvido com o framework ANGULAR.  

## Instalação

É necessário ter Node.JS e o Angular instalado. Caso ainda não o tenha, acesse o site do Node.js e baixe a última versão destinada ao seu sistema operacional. E para insatalar o Angular Cli, será preciso abrir o terminal do seu sistema operacional e digitar a instrução: "npm install -g @angular/cli".

## Execução 

Sequencialmente, concluindo a instalação, execute o seguinte comando no terminal do sistema operacional, dentro do diretório do projeto; para criar um novo projeto, dispondo dos arquivos necessários: 
"ng new NOME-DO-PROJETO"

Depois é necessário iniciar o servidor HTTP para testar de forma fácil e imedita as alterações feitas no projeto. 
Em algum terminal, use o seguinte comando: "ng serve"

## Componentes e Modulos criados

Quando cria-se um novo projeto, automaticamente são gerados os arquivos modulos e componentes com as extenções (.html; .scss; .ts;), caso seja necessário algum componente não criado anteriormente, simplesmente é só executar a seguinte linha de comando: "ng generate component [nome componente]" 

## Principais arquivos 

Eu destaquei apenas os arquivos principais :
“e2e” - pasta contendo os arquivos de testes e configurações para realizar testes;
“node_modules” - pasta contendo todos os pacotes restaurados a partir das dependências definidas no arquivo package.json;
“src/” - pasta da aplicação principal que contém a pasta app, os templates HTML, os componentes, módulos, etc.;
"app" - pasta contendo o arquivo de  módulo, e componente, sua view, arquivo de estilo, testes, etc.;
“main.ts" -  arquivo que inicia a aplicação; 
"tsconfig.json, index.html, etc” - arquivos essenciais necessários para rodar a aplicação;
“packages.json” - contém a referência a todos os pacotes necessários para a nossa aplicação Angular 2;

Na pasta app temos os seguintes arquivos:
app.component.css - arquivo de estilo;
app.component.html - arquivo html contendo código HTML que será exibido na view;
app.component.spec.ts - arquivo de testes;
app.component.ts - arquivo principal que possui a lógica da aplicação;
app.module.ts - arquivo de módulo que agrupa os componentes, diretivas, pipes e serviços usados na aplicação

A sintaxe dos nomes dos arquivos segue o guia de estilo do Angular : https://angular.io/guide/styleguide


## Usando/testando
O usuário tem que realizar um cadastro simples fornecendo "cpf" e "senha", logo, clicando no botão "cadastrar-se", é direcionado para tela de login.
Depois de inserir os dados de acesso, é direcionado para tela de saldo, onde é mostrado o valor contido na conta corrente desse usuário. 
Pode-se também na mesma tela, clicar no botão "Depositar", aparecerá um campo para digitar o valor que deseja realizar a operação, logo em seguida clica-se no botão "Efetuar deposito!", efetivamente o valor é depositado e apresentado na mesma tela como saldo. 
E por fim, para realizar o saque, deve-se fazer o mesmo procedimento como no anterior; depósito; só que clicando no botão "Sacar". 


## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão geral e referência de comandos do Angular CLI] (https://angular.io/cli).
