# Aplicação de Consulta de Filmes

Esta aplicação é uma ferramenta para consultar filmes e séries, integrada com a API OMDb (Open Movie Database). Desenvolvida com React e Vite, e estilizada com TailwindCSS, a aplicação permite pesquisar filmes e séries, listar resultados, adicionar e remover itens da lista de favoritos, e muito mais.

## Funcionalidades

- **Pesquisa de Filmes e Séries**: Permite buscar filmes e séries utilizando a API OMDb com filtros como ano de lançamento, gênero e tipo (filme, série, etc.).
- **Exibição de Detalhes**: Mostra detalhes completos de cada filme ou série, incluindo título, ano, diretor, elenco, sinopse e avaliação.
- **Favoritos**: Adicione filmes e séries à lista de favoritos e visualize-os em uma página separada.
- **Persistência de Dados**: Utilize `localStorage` para manter os resultados da pesquisa e a lista de favoritos, mesmo após atualizar a página.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de construção e desenvolvimento para projetos modernos.
- **TailwindCSS**: Framework de CSS utilitário para estilização rápida e responsiva.
- **OMDb API**: API pública para consulta de informações sobre filmes e séries.

## Instruções para Execução

### Pré-requisitos

Certifique-se de ter o Node.js e npm (ou yarn) instalados em sua máquina. Você pode baixar o Node.js [aqui](https://nodejs.org/).

### Clonando o Repositório

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

### Instalando Dependências

Instale as dependências do projeto usando npm ou yarn:
```bash
npm install
# ou
yarn install
```

### Configurando a Chave da API

Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API OMDb:

```plaintext
VITE_OMDB_API_KEY=c95958ab
```

### Executando a Aplicação

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```
