# PatroCars Express

Projeto de Aplicação Web Server-Side Rendering

## Descrição

Este projeto é uma aplicação web tradicional utilizando **server-side rendering (SSR)** com **Express.JS**. A aplicação tem como objetivo listar e gerenciar montadoras de automóveis, proporcionando uma interface limpa e eficiente com templates gerados no servidor.

Foi utilizado o **Pug** como template engine para gerar o HTML de forma dinâmica, o **Bootstrap** para garantir uma interface responsiva e moderna, e o **Express.JS** para gerenciar as rotas e a lógica do servidor.

Este projeto é a primeira atividade da disciplina de **Programação para Internet 2**, do curso de **Análise e Desenvolvimento de Sistemas** do **IFPI - 2024**, sob orientação do professor [**Rogério Silva**](https://github.com/rogeriosilva-ifpi/).

## Tecnologias Utilizadas

- **Express.JS**: Framework para servidor web em Node.js.
- **Pug**: Template engine para geração dinâmica de HTML.
- **Bootstrap**: Framework CSS para garantir um layout responsivo e estiloso.
- **Node.js**: Ambiente de execução do JavaScript no lado do servidor.
- **CSS Customizado**: Para sobreposição e customização dos estilos padrão do Bootstrap.

## Funcionalidades

- Listagem de montadoras de automóveis.
- Criação de novas montadoras através de um formulário dinâmico.
- Redirecionamento após criação com rotas apropriadas.
- Uso de **Pug** para geração de templates.
- Interface totalmente responsiva com **Bootstrap**.
- Possibilidade de customização de estilos (por exemplo, botões customizados).
- Atualização das informações das montadoras através de formulário.
- Remoção de Montadoras

## Principais Rotas:

- **GET /montadoras/**: Exibe a listagem de montadoras.
- **GET /montadoras/criar**: Exibe o formulário para criação de uma nova montadora.
- **POST /montadoras/criar/processarMontadora**: Processa a criação de uma nova montadora e redireciona para a listagem.

## Estrutura de Pastas

- **controllers/**: A pasta onde está o arquivo `montadorasController.ts`, responsável pela lógica de manipulação das requisições relacionadas às montadoras.
- **repositories/**: Onde está o arquivo `montadorasRepository.ts`, provavelmente gerenciando o acesso e a persistência dos dados das montadoras.
- **routes/**: A pasta contendo as definições de rotas em `montadorasRoutes.ts`, que encaminham as requisições para o controlador.
- **templates/**: Aqui ficam os templates Pug (`index.pug`, `montadorasCreate.pug`, `montadorasList.pug`), responsáveis pela renderização do conteúdo no frontend.
- **app.ts** e **main.ts**: O arquivo `app.ts` é onde a aplicação é configurada, e `main.ts` é onde o servidor é iniciado.
- **package.json** e **package-lock.json**: Arquivos de configuração e dependências do projeto.
- **tsconfig.json**: Configuração do TypeScript no projeto.

## Próximas Funcionalidades

- **Validação de Formulários**: Incluir validação dinâmica no front-end para melhorar a experiência do usuário.
- **Persistência**: Integração com banco de dados para armazenar e gerenciar montadoras.
- **Confirmação ao Excluir**: Adicionar uma confirmação antes de excluir uma montadora para evitar acidentes.

## Deploy

A aplicação foi publicada utilizando o serviço de hospedagem **Render**. Você pode acessar a aplicação através do seguinte link:

[PatroCars Express no Render](https://patrocars-express.onrender.com)
