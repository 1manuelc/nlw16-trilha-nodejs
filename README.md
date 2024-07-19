# Backend plann.er
<div>
  <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='Node.js'>
  <img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' alt='TypeScript'>
  <img src='https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white' alt='Fastify'>
  <img src='https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white' alt='Prisma'>
  <img src='https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white' alt='Zod'>
</div>

Este projeto contém uma API para a aplicação [plann.er](https://github.com/1manuelc/nlw16-trilha-react), fornecendo dados de viagens, participantes, atividades e links editáveis através da interface.


## Funcionalidades
* Fornecimento de dados para o Frontend específico através de rotas bem definidas.
* Exibição aprimorada de erros.

## Implementação
A API foi feita com `Node.js` e construído utilizando `Typescript + Fastify`, utilizando como base as dependências:
* `prisma`: para mapear o banco de dados local e fornecer operações simplificadas.
* `dayjs`: para operações com datas.
* `nodemailer`: para mandar e-mail no tempo de execução.
* `zod`: para validar tipos de dados em requisições.
* `tsx`: para executar arquivos `.ts`.

## Roteamento
Você pode importar o arquivo [`routes.json`](https://github.com/1manuelc/nlw16-trilha-nodejs/blob/main/routes.json) de **formato Insomnia V4** para sua ferramenta de testes de API's.

## Executando localmente
Para executar a API, você precisa:

1. Clonar este repositório ou fazer um fork: <br/>
`git clone https://github.com/1manuelc/nlw16-trilha-nodejs.git`

2. Instalar as dependências necessárias á partir do seu gerenciador de pacotes (não é obrigatório ser npm): <br/>
`npm i`

3. Executar o comando: <br/>
`npm run dev`
