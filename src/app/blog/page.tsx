import { IArticle } from "@/lib/interfaces/http/article.interface";
import ArticleComponent from "../components/Article";

export default function BlogMainPage() {
  const articles: IArticle[] = [
    {
      id: "1",
      articleImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
      title: "Descrição artigo",
      description: "Descrição artigo",
      slug: "teste-1",
      createdAt: "12 March",
    },
    {
      id: "2",
      articleImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
      title: "Descrição artigo",
      description: "Descrição artigo",
      slug: "teste-2",
      createdAt: "12 March",
    },
    {
      id: "3",
      articleImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
      title: "Descrição artigo",
      description: "Descrição artigo",
      slug: "teste-3",
      createdAt: "12 March",
    },
    {
      id: "4",
      articleImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
      title: "Descrição artigo",
      description: "Descrição artigo",
      slug: "teste-4",
      createdAt: "12 March",
    },
    {
      id: "5",
      articleImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysm7d0JnuK4_jPG6U3Fyd1cRzbb78Z_7-4g&s",
      title: "Descrição artigo",
      description: "Descrição artigo",
      slug: "teste-5",
      createdAt: "12 March",
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
