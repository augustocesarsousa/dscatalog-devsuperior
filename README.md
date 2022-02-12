# DS Catalog

Este projeto foi desenvolvido ao decorrer do curso Spring React da <a href="https://devsuperior.com.br/" target="_blank">DevSuperior</a>, ele consiste em um catálogo de produtos implementando as tecnologias mais utilizadas no mercado atual, abaixo segue a uma descrição resumida das tecnologias:

## **Backend**

* Linguagem de programação: Java 11
* Framework: Spring Boot 2.4.x

**CRUD**
  
  * Projeto em camadas
    * Controladores REST
    * Serviços
    * Acesso a dados (Repository)
  * Padrão DTO
  * Tratamento de exceções

**Testes**

  * TDD
  * JUint
  * Mockito & MockBean
  
**Validação e segurança**

  * Modelo de dados de usuários e perfis
  * Validação com Bean Validation
    * Spring Security
    * OAuth 2.0
    * Token JWT
    * Autorização de rotas por perfil
    
**Consultas ao banco de dados**

  * SQL e JPQL
  * Spring Data JPA
    * Query methods
    * Problema N+1 consultas
    
**Implantação e CI/CD**

  * Docker
  * Implantação manual na AWS
    * EC2
    * RDS
  * CI/CD
    * Heroku
    * AWS
    * Github Actions
    
## **Frontend**

* Linguagem de programação: Typescript
* Framework: React

**Layout e navegação**
  
  * Layout
    * HTML
    * CSS
      * Flexbox
      * Bootstrap
      * Responsividade
  * Rotas
    * React Router DOM
    
**Integração com API**

  * Props
  * Axios
  * React Hooks
  * Loaders
  
**Autenticação e autorização**

  * Formulários
    * React Hook Form
  * Login OAuth2
  * Interceptors
  * LocalStorage
  * Fluxos de autenticação e autorização
    * Rotas protegidas
    * Redirecionamentos de login e de autorização
    * Permissionamento em nível de rotas
    * Restrição de conteúdo (UI) baseada em perfil de usuário
    
**Paginação e filtros**

  * Listagem de dados
  * Comunicação entre componentes com eventos (padrão observer)
  * Integração de libs com React Hook Form
    * React Select
    * React Currency Input Field
    * React Pagination
  * React Toastfy
  * Filtragem de dados
  * Controle de referência com hook useCallback
  
**Testes e implantação**

  * JEST e Testing Library
  * Testes de funções JS/TS
    * Execução de testes, modo watch
    * Bloco describe e suíte de testes
    * Mock de funções com spyOn
  * Testes de componentes React
    * Testes de unidade e de integração
    * Mock de funções com jest.fn()
    * Mock de requisições com MSW
    * Mock do React Router DOM
    * Simulação de interação do usuário
    * Fixtures
    * Inputs de formulário
    * Submissão de formulário
  * Implantação com CI/CD
    * Netlify
    
## Executando o projeto

Baixe o código fonte e o extraia em seu diretório de preferência, exemplo (C:\Workspaces). 

### Backend

Abra a pasta backend com a sua IDE Java de preferência, recomendação (Spring Tools ou VS Code), aguarde o Maven baixar as dependências e depois execute o projeto.

### Frontend

Abra a pasta frontend no seu terminal e execute os seguintes comandos:

1) Instalando as dependências

  ```
  yarn
  ```
  
2) Rodando o projeto

  ```
  yarn start
  ```
  
