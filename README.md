# DS Catalog

Este projeto foi desenvolvido ao decorrer do curso Spring React da <a href="https://devsuperior.com.br/" target="_blank">DevSuperior</a>, ele consiste em um catálogo de produtos implementando as tecnologias mais utilizadas no mercado atual, abaixo segue uma descrição resumida das tecnologias:

## **Backend**

- Linguagem de programação: Java 11
- Framework: Spring Boot 2.4.x

**CRUD**

- Projeto em camadas
  - Controladores REST
  - Serviços
  - Acesso a dados (Repository)
- Padrão DTO
- Tratamento de exceções

**Testes**

- TDD
- JUint
- Mockito & MockBean

**Validação e segurança**

- Modelo de dados de usuários e perfis
- Validação com Bean Validation
  - Spring Security
  - OAuth 2.0
  - Token JWT
  - Autorização de rotas por perfil

**Consultas ao banco de dados**

- SQL e JPQL
- Spring Data JPA
  - Query methods
  - Problema N+1 consultas

**Implantação e CI/CD**

- Docker
- Implantação manual na AWS
  - EC2
  - RDS
- CI/CD
  - Heroku
  - AWS
  - Github Actions

## **Frontend**

- Linguagem de programação: Typescript
- Framework: React

**Layout e navegação**

- Layout
  - HTML
  - CSS
    - Flexbox
    - Bootstrap
    - Responsividade
- Rotas
  - React Router DOM

**Integração com API**

- Props
- Axios
- React Hooks
- Loaders

**Autenticação e autorização**

- Formulários
  - React Hook Form
- Login OAuth2
- Interceptors
- LocalStorage
- Fluxos de autenticação e autorização
  - Rotas protegidas
  - Redirecionamentos de login e de autorização
  - Permissionamento em nível de rotas
  - Restrição de conteúdo (UI) baseada em perfil de usuário

**Paginação e filtros**

- Listagem de dados
- Comunicação entre componentes com eventos (padrão observer)
- Integração de libs com React Hook Form
  - React Select
  - React Currency Input Field
  - React Pagination
- React Toastfy
- Filtragem de dados
- Controle de referência com hook useCallback

**Testes e implantação**

- JEST e Testing Library
- Testes de funções JS/TS
  - Execução de testes, modo watch
  - Bloco describe e suíte de testes
  - Mock de funções com spyOn
- Testes de componentes React
  - Testes de unidade e de integração
  - Mock de funções com jest.fn()
  - Mock de requisições com MSW
  - Mock do React Router DOM
  - Simulação de interação do usuário
  - Fixtures
  - Inputs de formulário
  - Submissão de formulário
- Implantação com CI/CD
  - Netlify

## Imagens o projeto

1. Página home

![Home page](/images/01-home-page.png)

2. Página de login

![Login page](/images/02-login-page.png)

3. Página alteração de senha

![Change password page](/images/03-change-password-page.png)

4. Catálogo de produtos

![Catalog page](/images/04-catalog-page.png)

5. Detalhes do produto

![Catalog page, product details](/images/05-catalog-page-product-details.png)

6. Página de administração de produtos

![Admin page, products](/images/06-admin-page-products.png)

7. Formulário de criação/alteração de produtos

![Admin page, product form](/images/07-admin-page-products-form.png)

8. Página de administração de categorias

![Admin page, categories](/images/08-admin-page-category-list.png)

9. Formulário de criação/alteração de categorias

![Admin page, category form](/images/09-admin-page-category-form.png)

10. Página de administração de usuários

![Admin page, users](/images/10-admin-page-user-list.png)

11. Formulário de criação/alteração de usuários

![Admin page, user form](/images/11-admin-page-user-form.png)

## Executando o projeto

### Docker

- Requisitos:

  - Docker;
  - Docker-compose.

Executar o comando abaixo via terminal na rais do projeto:

```
docker-compose up
```

### Manual

**Backend**

- Requisitos

  - Java 11
  - Maven 3.6.x

Executar os comandos abaixo via terminal na pasta backend:

```
mvn install
mvn spring-boot:run
```

**Frontend**

- Requisitos

  - Node 14
  - Npm (compatíval com a versão do Node)
  - Yarn

Executar os comandos abaixo via terminal na pasta frontend:

```
yarn
yarn start
```

### Links

- Backend Swagger: <http://localhost:8080/swagger-ui.html#/>
- Frontend: <http://localhost:3000/>

**Usuários para teste**

- Operador: operador@email.com
- Senha: 123456
- Operador: admin@email.com
- Senha: 123456

## Projeto implantado

**Frontend**

- Local: Netlify
- Link: <https://acsousa-dscatalog.netlify.app>

**Backend**

- Local: Render
- Link: <https://dscatalog-backend.onrender.com>
- **Obs: O backend está implantado na verão free, fazendo ele hibernar após um período ocioso, isso ocasiona uma demora no retorno dos dados.**
