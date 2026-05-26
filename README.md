# Agenda de Contatos

Aplicacao web para cadastro e gerenciamento simples de contatos, feita com React, TypeScript, Redux Toolkit e React Router.

## Funcionalidades

- Tela inicial (`/`) com formulario de login (interface inicial).
- Listagem de contatos (`/agenda`) com acoes de editar e remover.
- Cadastro de novo contato (`/new`).
- Persistencia local via `localStorage`.

## Stack utilizada

- React 18
- TypeScript
- Redux Toolkit + React Redux
- React Router DOM
- Styled Components
- Create React App (`react-scripts`)
- ESLint

## Estrutura do projeto

```text
src/
	App.tsx
	GlobalStyle.ts
	pages/
		home/
		agenda/
		newContact/
		store/
```

## Requisitos

- Node.js 18+ (recomendado)
- pnpm (o projeto usa `pnpm-lock.yaml`)

## Como executar

1. Instale as dependencias:

```bash
pnpm install
```

2. Rode em modo desenvolvimento:

```bash
pnpm start
```

3. Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponiveis

- `pnpm start`: inicia o servidor de desenvolvimento.
- `pnpm test`: executa os testes em modo interativo.
- `pnpm build`: gera a versao de producao na pasta `build`.
- `pnpm eject`: ejeta a configuracao do CRA (irreversivel).

## Persistencia de dados

Os contatos sao salvos no `localStorage` com a chave `contacts`.

## Melhorias sugeridas

- Substituir links de menu (`<a href="...">`) por `Link`/`NavLink` do React Router.
- Remover manipulacao direta de DOM na tela de agenda e usar estado React para edicao.
- Adicionar validacoes de formulario e feedback visual para erros.
- Cobrir fluxos principais com testes.
