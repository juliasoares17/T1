# T4 – Sistema CLI para Gestão de Comércio Pet

## 1. Introdução

Este projeto corresponde à atividade 1 da avaliação do professor Gerson da Pinha Neto. O objetivo é desenvolver a primeira versão do sistema PetLovers (PL), uma aplicação do tipo CLI (Command-Line Interface) voltada ao gerenciamento de lojas e clínicas do mercado pet.
A atividade simula o início da trajetória da empresa fictícia Computer4Pet (C4P), especializada no desenvolvimento de soluções tecnológicas para pet shops, clínicas veterinárias e comércio eletrônico de produtos e serviços para animais de estimação. O sistema teria sido inicado por uma software house terceirizada, mas ainda é necessário finalizar a implementação com base nos requisitos definidos.

## 2. Funcionalidades
- Clientes: criar, editar, excluir e listar;

- Pets: criar vinculando a um cliente via CPF, editar, excluir e listar;

- Produtos e Serviços: criar, editar, excluir e listar;

- Registro de consumo: selecionar cliente, pet, item, quantidade e tipo;

- Relatórios:

  - Top 5 produtos mais consumidos,

  - Top 5 serviços mais consumidos,

  - Itens mais consumidos por tipo e raça de pets,

  - Top 10 clientes por quantidade consumida,

  - Top 5 clientes por valor consumido.

## 3. Tecnologias utilizadas

- **TypeScript 4.9.5** – Linguagem usada para desenvolvimento do sistema.
- **Node.js 23.5.0** – Utilizado como ambiente de execução da aplicação TypeScript.
- **Prompt-sync 4.2.0** – Biblioteca para leitura de dados no terminal (CLI).
- **@types/node** – Tipagens do Node.js para desenvolvimento em TypeScript.
- **@types/prompt-sync** – Tipagens da biblioteca prompt-sync.

## 4. Estrutura do projeto

```
T1/
├── src/
│   ├── app/
│   │   └── main.ts
│   ├── io/
│   │   └── entrada.ts
│   ├── modelo/
│   │   ├── cliente.ts
│   │   ├── cpf.ts
│   │   ├── empresa.ts
│   │   ├── pet.ts
│   │   ├── produto.ts
│   │   ├── rg.ts
│   │   ├── servico.ts
│   │   └── telefone.ts
│   ├── negocio/
│   │   ├── cadastro.ts
│   │   ├── cadastroCliente.ts
│   │   ├── cadastroPet.ts
│   │   ├── cadastroProduto.ts
│   │   ├── cadastroServico.ts
│   │   ├── edicao.ts
│   │   ├── edicaoCliente.ts
│   │   ├── edicaoPet.ts
│   │   ├── edicaoProduto.ts
│   │   ├── edicaoServico.ts
│   │   ├── exclusao.ts
│   │   ├── exclusaoCliente.ts
│   │   ├── exclusaoPet.ts
│   │   ├── exclusaoProduto.ts
│   │   ├── exclusaoServico.ts
│   │   ├── formatarData.ts
│   │   ├── listagem.ts
│   │   ├── listagemClientes.ts
│   │   ├── listagemConsumo.ts
│   │   ├── listagemMaisConsumidos.ts
│   │   ├── listagemMaisConsumidosPet.ts
│   │   ├── listagemMaisConsumidosQuantidade.ts
│   │   ├── listagemMaisConsumidosValor.ts
│   │   ├── listagemServicosProdutos.ts
│   └── └── registroConsumo.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

## 5. Instruções para execução
Siga os passos abaixo para executar o projeto localmente:

**1 -> Clone o repositório:**

```
git clone https://github.com/juliasoares17/T1
cd T1
```

**2 -> Instale as dependências:**

```
npm install
```

ℹ️ **Observação:** Durante a instalação (`npm install`), alguns avisos de dependências desatualizadas podem aparecer. Isso não compromete a execução do projeto.

**3 -> Compile os arquivos TypeScript:**

```
npx tsc
```

**4 -> Execute o sistema no terminal:**

```
node out/app/main.js
```

O sistema será executado via terminal. Interações devem ser feitas digitando os comandos solicitados pela interface CLI.

## 6. Considerações finais
A atividade 1 marca o início da construção do sistema PetLovers (PL) da empresa fictícia C4P (Computer4Pet). Esta versão inicial introduz a lógica de negócios fundamental para gerenciamento de clientes, pets, produtos e serviços, utilizando um modelo simples baseado em terminal e armazenamento em memória. A aplicação serviu como base para as evoluções das atividades seguintes, incluindo o desenvolvimento de interface gráfica e integração com backend.