

# Gerenciador de Produtos - Angular

Este projeto foi desenvolvido como parte introdutória do curso de Angular, com o objetivo de explorar as principais ferramentas do framework e aplicar os conceitos de CRUD (Create, Read, Update, Delete) em uma aplicação real.

## 📂 Estrutura do Projeto

A organização dos arquivos segue boas práticas, separando componentes por funcionalidade e reutilização:

```
src/
└── app/
    ├── features/
    │   ├── create/
    │   ├── list/
    │   │   └── components/
    │   │       ├── card/
    │   │       └── no-items/
    │   └── edit/
    ├── shared/
    │   ├── components/
    │   │   ├── back-to-list/
    │   │   ├── form/
    │   │   └── header/
    │   ├── interfaces/
    │   ├── resolvers/
    │   └── services/
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.css
    ├── app.routes.ts
    └── app.config.ts
```
## Funcionalidades

- Listagem de produtos
- Criação de novo produto
- Edição de produto existente
- Exclusão de produtos
- Reutilização de componentes compartilhados

## Backend Simulado

Para simular um backend RESTful, foi utilizado o **JSON Server** com um arquivo `db.json`, contendo os dados dos produtos.

### Como rodar o JSON Server:

```bash
npx json-server --watch db.json
```

## Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/ViniciusBorgesdeAraujo/gerenciador-produtos.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento Angular:
```bash
ng serve
```

4. Em outro terminal, inicie o JSON Server:
```bash
npx json-server --watch db.json
```

5. Acesse a aplicação em:  
`http://localhost:4200`

## Tecnologias utilizadas

- Angular
- TypeScript
- HTML/CSS
- JSON Server

---

Projeto de aprendizado criado com fins educacionais.

