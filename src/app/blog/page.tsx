import { IArticle } from "@/lib/interfaces/http/article.interface";
import ArticleComponent from "../components/Article";

export default function BlogMainPage() {
  const articles: IArticle[] = [
    {
      id: "1",
      articleImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
      title: "Introdução ao JavaScript Moderno",
      description: `
      # JavaScript Moderno 🚀
      
      ![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)
      
      O JavaScript é uma das linguagens mais populares do mundo. Com o ES6 e além, muitas funcionalidades poderosas foram introduzidas.
      
      ## Principais tópicos
      
      - Arrow Functions
      - Desestruturação
      - Promises
      - Async/Await
      
      ### Exemplo
      
      \`\`\`js
      const soma = (a, b) => a + b;
      console.log(soma(5, 7)); // 12
      \`\`\`
      
      > _"JavaScript é a linguagem da web."_  
      `,
      slug: "introducao-javascript",
      createdAt: "12 March",
    },
    {
      id: "2",
      articleImageSrc: "https://picsum.photos/seed/2/600/400",
      title: "Guia de Git e GitHub",
      description: `
      # Git e GitHub
      
      ![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
      
      Este guia cobre comandos essenciais e boas práticas no uso de Git e GitHub.
      
      ## Comandos úteis
      
      - \`git init\`
      - \`git status\`
      - \`git add .\`
      - \`git commit -m "mensagem"\`
      - \`git push origin main\`
      
      > _"Commitar é uma arte."_  
      `,
      slug: "guia-git-github",
      createdAt: "14 March",
    },
    {
      id: "3",
      articleImageSrc: "https://picsum.photos/seed/3/600/400",
      title: "Como funciona o React por baixo dos panos",
      description: `
      # Entendendo o React
      
      React utiliza o conceito de Virtual DOM para minimizar manipulações diretas no DOM real.
      
      ## Conceitos abordados
      
      - JSX
      - Componentes
      - useState, useEffect
      - Re-render
      
      \`\`\`tsx
      function MeuComponente() {
        const [contador, setContador] = useState(0);
        return <button onClick={() => setContador(contador + 1)}>{contador}</button>
      }
      \`\`\`
      
      > Reatividade com controle.
      `,
      slug: "como-funciona-react",
      createdAt: "16 March",
    },
    {
      id: "4",
      articleImageSrc: "https://picsum.photos/seed/4/600/400",
      title: "Conhecendo o NestJS",
      description: `
      # NestJS 🚀
      
      Framework para desenvolvimento de APIs escaláveis usando Node.js + TypeScript.
      
      ![Nest Logo](https://docs.nestjs.com/assets/logo-small.svg)
      
      ## Recursos principais
      
      - Injeção de Dependência
      - Controllers
      - Providers
      - Guards
      - Middleware
      
      > Rápido, modular e robusto.
      `,
      slug: "conhecendo-nestjs",
      createdAt: "17 March",
    },
    {
      id: "5",
      articleImageSrc: "https://picsum.photos/seed/5/600/400",
      title: "Markdown avançado: Guia visual",
      description: `
      # Guia de Markdown 📘
      
      Markdown é uma linguagem de marcação leve, ideal para documentação.
      
      ## Elementos
      
      - **Texto em negrito**
      - _Itálico_
      - ~~Tachado~~
      - [Links](https://google.com)
      
      ### Código
      
      \`\`\`bash
      npm install
      npm run dev
      \`\`\`
      
      ### Tabelas
      
      | Nome   | Idade |
      |--------|-------|
      | Alice  | 30    |
      | Bob    | 25    |
      `,
      slug: "markdown-avancado",
      createdAt: "20 March",
    },
    {
      id: "6",
      articleImageSrc: "https://picsum.photos/seed/6/600/400",
      title: "Criando APIs RESTful com Express",
      description: `
      # Express.js API
      
      Express é um framework leve para Node.js ideal para criar APIs REST.
      
      ## Setup básico
      
      \`\`\`js
      const express = require('express');
      const app = express();
      
      app.get('/', (req, res) => res.send('Olá mundo!'));
      app.listen(3000);
      \`\`\`
      
      > Simples, direto e poderoso.
      `,
      slug: "api-restful-express",
      createdAt: "21 March",
    },
    {
      id: "7",
      articleImageSrc: "https://picsum.photos/seed/7/600/400",
      title: "Como funciona o TypeScript",
      description: `
      # TypeScript
      
      TypeScript é um superconjunto de JavaScript com tipagem estática.
      
      ## Vantagens
      
      - Autocompletar
      - Inferência de tipos
      - Interfaces e tipos personalizados
      
      ### Exemplo
      
      \`\`\`ts
      type User = {
        name: string;
        age: number;
      }
      \`\`\`
      
      > Mais confiança no seu código.
      `,
      slug: "como-funciona-typescript",
      createdAt: "22 March",
    },
    {
      id: "8",
      articleImageSrc: "https://picsum.photos/seed/8/600/400",
      title: "Fundamentos de Banco de Dados",
      description: `
      # Banco de Dados
      
      Você sabe qual a diferença entre SQL e NoSQL?
      
      ## Tópicos abordados
      
      - Modelagem relacional
      - Joins
      - Indexes
      - MongoDB vs PostgreSQL
      
      ![Banco de Dados](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/320px-Postgresql_elephant.svg.png)
      
      > Dados bem organizados, sistemas eficientes.
      `,
      slug: "fundamentos-banco-dados",
      createdAt: "23 March",
    },
    {
      id: "9",
      articleImageSrc: "https://picsum.photos/seed/9/600/400",
      title: "O que é CI/CD na prática?",
      description: `
      # CI/CD
      
      CI = Integração Contínua  
      CD = Entrega Contínua
      
      ## Ferramentas
      
      - GitHub Actions
      - GitLab CI
      - CircleCI
      
      \`\`\`yaml
      jobs:
        build:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v2
      \`\`\`
      
      > Automatize tudo.
      `,
      slug: "ci-cd-na-pratica",
      createdAt: "25 March",
    },
    {
      id: "10",
      articleImageSrc: "https://picsum.photos/seed/10/600/400",
      title: "Introdução ao Docker",
      description: `
      # Docker 🐳
      
      Docker permite empacotar aplicações em contêineres.
      
      ## Conceitos
      
      - Imagem vs Container
      - Dockerfile
      - Volumes
      
      ### Exemplo de Dockerfile
      
      \`\`\`dockerfile
      FROM node:18
      WORKDIR /app
      COPY . .
      RUN npm install
      CMD ["npm", "run", "dev"]
      \`\`\`
      
      > Funciona na minha máquina e na sua também.
      `,
      slug: "introducao-docker",
      createdAt: "26 March",
    },
  ];

  return (
    <div className="flex flex-col px-[10] py-10 items-center">
      <h1 className="text-5xl">Articles</h1>
      <div className="flex flex-1/2 flex-col px-32 items-center justify-start gap-10 w-full">
        {articles.map((article) => (
          <ArticleComponent key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
