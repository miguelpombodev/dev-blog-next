import MarkDownRenderer from "@/app/components/MarkdownRenderer";
import dedent from "dedent";

import { IArticle } from "@/lib/interfaces/http/article.interface";
// interface ArticlePageProps {
//   slug: string;
// }

export default function Article() {
  const article: IArticle = {
    id: "1",
    articleImageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
    title: "Introdução ao JavaScript Moderno",
    description: dedent(`
        ![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)
        # JavaScript Moderno 🚀
    
        O JavaScript é uma das linguagens mais populares do mundo...
    
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
      `),
    slug: "introducao-javascript",
    createdAt: "12 March",
  };

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-5xl font-bold">{article.title}</h1>
        <div className="flex gap-4 text-sm text-gray-500 border-b-1 border-foreground py-4">
          <p>⏱️ 5 min read</p>
          <p>📅 {article.createdAt}</p>
        </div>
      </div>
      <div>
        <MarkDownRenderer content={article.description} />
      </div>
    </div>
  );
}
