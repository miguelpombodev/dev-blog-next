import { IArticle } from "@/lib/interfaces/http/article.interface";
import ArticleComponent from "../components/Article";

function renderArticles(articles: IArticle[]) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-3xl text-inactive underline underline-offset-8 decoration-secondary mb-3.5">
          Oh I so sorry! Ours articles are no available yet!
        </p>
        <p>{"As soon as possible we'll have our articles listed here 😉"}</p>
      </div>
    );
  }
  return articles.map((article) => (
    <ArticleComponent key={article.id} article={article} />
  ));
}

export default function BlogMainPage() {
  const articles: IArticle[] = [
    {
      id: "1",
      articleImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
      title: "Guia Completo de JavaScript",
      briefDescription: "Tudo sobre JavaScript moderno com exemplos e imagens.",
      description: `# Guia Completo de JavaScript 🚀

        ![JavaScript](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)

        O JavaScript é uma das linguagens mais populares do mundo. Com o ES6+, recursos como **Arrow Functions**, **Desestruturação**, e **Async/Await** tornaram o código mais limpo e poderoso.

        ## 📌 Recursos abordados

        - Arrow Functions
        - Desestruturação de objetos
        - Promises e async/await
        - Manipulação de DOM
        - Classes e módulos

        ## 📸 Exemplo de Imagem

        ![DOM](https://developer.mozilla.org/static/img/web-docs-sprite.22a6a085cf14.svg)

        ## 💻 Exemplo de código

        \`\`\`js
        const hello = (name) => {
          return \`Olá, \${name}!\`;
        };

        console.log(hello("JavaScript"));
        // Saída: Olá, JavaScript!
        \`\`\`

        > _"JavaScript é a linguagem da web."_
        `,
      slug: "guia-javascript",
      createdAt: "12 March",
    },
    {
      id: "2",
      articleImageSrc: "https://picsum.photos/id/237/600/400",
      title: "React para Iniciantes",
      briefDescription:
        "Entenda os fundamentos do React com exemplos práticos.",
      description: `# React para Iniciantes ⚛️

        ![React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

        React é uma biblioteca JavaScript declarativa e baseada em componentes para criar interfaces de usuário.

        ## 🔧 Componentes

        - Funcionais
        - Baseados em Classe
        - Props e State
        - Hooks (useState, useEffect)

        ## Exemplo com useState

        \`\`\`js
        import { useState } from "react";

        function Contador() {
          const [contador, setContador] = useState(0);

          return <button onClick={() => setContador(contador + 1)}>{contador}</button>;
        }
        \`\`\`

        > "Uma interface é uma função do estado."
        `,
      slug: "react-para-iniciantes",
      createdAt: "15 March",
    },
    {
      id: "3",
      articleImageSrc: "https://picsum.photos/id/1015/600/400",
      title: "Node.js na Prática",
      briefDescription: "Construa APIs com Node.js de forma simples e direta.",
      description: `# Node.js na Prática 🌐

        ![Node.js](https://nodejs.org/static/images/logo.svg)

        Node.js permite que você crie aplicações JavaScript no lado do servidor com alta performance.

        ## 📦 Tópicos

        - Módulo HTTP
        - Express.js
        - Middlewares
        - API REST

        ### Código com Express

        \`\`\`js
        const express = require('express');
        const app = express();

        app.get('/', (req, res) => res.send('Olá, Node!'));
        app.listen(3000);
        \`\`\`

        > _"JavaScript em todos os lugares."_
        `,
      slug: "nodejs-na-pratica",
      createdAt: "18 March",
    },
    {
      id: "4",
      articleImageSrc: "https://picsum.photos/id/1005/600/400",
      title: "CSS Moderno com Tailwind",
      briefDescription:
        "Estilize sua aplicação com produtividade usando Tailwind CSS.",
      description: `# CSS Moderno com Tailwind 🎨

        ![Tailwind](https://tailwindcss.com/_next/static/media/twitter-card.f6c9252b.jpg)

        Tailwind CSS é um framework utilitário para criação de interfaces elegantes e responsivas.

        ## 📚 Tópicos

        - Utility-first
        - Responsividade
        - Dark mode
        - Customização

        ### Exemplo

        \`\`\`html
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Clique aqui</button>
        \`\`\`

        > "Estilo sem sair do HTML!"
        `,
      slug: "css-tailwind",
      createdAt: "21 March",
    },
    {
      id: "5",
      articleImageSrc: "https://picsum.photos/id/1056/600/400",
      title: "Git e GitHub: Controle de Versão",
      briefDescription: "Domine o versionamento de código com Git e GitHub.",
      description: `# Git e GitHub 🗂️

        ![Git](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png)

        Git é o sistema de controle de versão mais usado no mundo, e o GitHub é a principal plataforma para hospedá-los.

        ## Comandos úteis

        - \`git init\`
        - \`git status\`
        - \`git add .\`
        - \`git commit -m "mensagem"\`
        - \`git push origin main\`

        > _"Commite cedo, commite sempre."_
        `,
      slug: "git-e-github",
      createdAt: "25 March",
    },
    {
      id: "6",
      articleImageSrc: "https://picsum.photos/id/1060/600/400",
      title: "APIs REST com Express",
      briefDescription: "Crie APIs de forma eficiente usando Express.js.",
      description: `# APIs REST com Express 🚀

        ## Criando um CRUD básico

        \`\`\`js
        const express = require("express");
        const app = express();

        app.use(express.json());

        app.get("/users", (req, res) => {
          res.json([{ id: 1, name: "João" }]);
        });

        app.listen(3000, () => console.log("API rodando..."));
        \`\`\`

        > "APIs simples, rápidas e elegantes."
        `,
      slug: "apis-rest-express",
      createdAt: "28 March",
    },
    {
      id: "7",
      articleImageSrc: "https://picsum.photos/id/1021/600/400",
      title: "Banco de Dados com PostgreSQL",
      briefDescription: "Aprenda os fundamentos do PostgreSQL para back-end.",
      description: `# Banco de Dados com PostgreSQL 🛢️

        ## Comandos básicos

        - \`CREATE TABLE users (...)\`
        - \`INSERT INTO users VALUES (...)\`
        - \`SELECT * FROM users;\`

        ## Exemplo ERD

        ![ERD](https://www.vertabelo.com/blog/img/2020/06/ERD_01.png)

        > "Dados bem modelados, sistema eficiente."
        `,
      slug: "postgresql-fundamentos",
      createdAt: "30 March",
    },
    {
      id: "8",
      articleImageSrc: "https://picsum.photos/id/1048/600/400",
      title: "Boas Práticas de Código",
      briefDescription: "Escreva código limpo, legível e de fácil manutenção.",
      description: `# Boas Práticas de Código 🧼

        ## Dicas essenciais

        - Nomeie variáveis de forma clara
        - Comente somente o necessário
        - Divida o código em funções pequenas
        - Evite duplicação

        ### Exemplo ruim:

        \`\`\`js
        let x = 10;
        let y = 20;
        let z = x + y;
        \`\`\`

        ### Exemplo bom:

        \`\`\`js
        const precoProduto = 10;
        const frete = 20;
        const precoTotal = precoProduto + frete;
        \`\`\`

        > "Código limpo é mais importante que código curto."
        `,
      slug: "boas-praticas-codigo",
      createdAt: "2 April",
    },
    {
      id: "9",
      articleImageSrc: "https://picsum.photos/id/1050/600/400",
      title: "Deploy de Aplicações",
      briefDescription: "Entenda como publicar sua aplicação na web.",
      description: `# Deploy de Aplicações ☁️

        ## Plataformas populares

        - Vercel
        - Netlify
        - Render
        - Railway

        ### Exemplo com Vercel

        1. Push no GitHub
        2. Conectar repositório na Vercel
        3. Build automático
        4. Deploy em segundos!

        > "O deploy não precisa ser difícil."
        `,
      slug: "deploy-aplicacoes",
      createdAt: "5 April",
    },
    {
      id: "10",
      articleImageSrc: "https://picsum.photos/id/1058/600/400",
      title: "Testes Automatizados com Jest",
      briefDescription: "Introdução aos testes unitários em JavaScript.",
      description: `# Testes Automatizados com Jest ✅

        ![Jest](https://jestjs.io/img/opengraph.png)

        ## Por que testar?

        - Reduz bugs
        - Ajuda na refatoração
        - Garante confiabilidade

        ## Exemplo

        \`\`\`js
        function soma(a, b) {
          return a + b;
        }

        test('soma 1 + 2 é 3', () => {
          expect(soma(1, 2)).toBe(3);
        });
        \`\`\`

        > _"Código sem teste é código quebrado."_
        `,
      slug: "testes-com-jest",
      createdAt: "7 April",
    },
  ];

  //     const getRepoCount = await fetchApi.Get<IGetGithubUser>(
  //       "github",
  //       "users/miguelpombodev"
  //     );

  //   const articles: IArticle[] = [];

  return (
    <div className="flex flex-col px-[10] py-10 items-center">
      <h1 className="mb-15 text-5xl md:mb-0">Articles</h1>
      <div className="flex flex-1/2 px-2 flex-col items-center justify-start gap-10 w-full md:px-32">
        {renderArticles(articles)}
      </div>
    </div>
  );
}
