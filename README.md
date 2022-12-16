# Projeto_Lista_Telefonica_MVC_MongoDB_WebPack_FullStack

Projeto Fullstack! Desenvolvido juntamente com o Prof° Otávio Miranda no curso de "JavaScript e TypeScript do básico ao avançado".

## O que temos aqui:
Um projeto FullStack, lista telefônica online com cadastro de usuário e contatos. O projeto é conectado ao MongoDB Online.

## Suas funcionalidades são: 
* Cadastro de Usuário (CRUD);
* gravação de contatos (CRUD);
* Criação de sessão ao logar.
* Utilização de Hash de senha antes de salvar no banco de dados.
* Utilização de Flash Messages.
* Validação de formulários.
* Segurança contra invasores com CSRF Token.

## Tecnologias: 
* BackEnd: *Node.js*
* FrontEnd: *Template Engine: ejs (com HTML5 semântico)*
* Estilo: *CSS3*
* Linguagem: *JavaScript*
* DataBase: *MongoDB*
* DataBase framework: *mongoose*

## Dependências:
### Hash
* bcryptjs

### Flash Messages
* connect-flash

### Permanência de sessão
* express-session

### Servidor
* express

### Template engine
* ejs

### DataBase
* connect-mongo
* mongoose

### WebPack (relacionados)
* style-loader
* css-loader
* core-js
* regenerator-runtime

### Outros
* csurf (Middleware de proteção CSRF Node.js para ExpressJS)
* dotenv (Carrega variáveis de ambiente em arquivo .env)
* Helmet (Configura cabeçalhos HTTP, middlewares de segurança)
* validator (valida formulários html)


## Dev dependences
* @babel/cli
* @babel/core
* @babel/preset-env
* babel-loader
* nodemon
* webpack
* webpack-cli
