import { IArticle } from "@/lib/interfaces/http/article.interface";
import ArticleComponent from "../components/Article";
import FetchApiClient from "@/lib/axios";

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
    <ArticleComponent key={article._id} article={article} />
  ));
}

export default async function BlogMainPage() {
  const fetchApi = new FetchApiClient();
  const articles = await fetchApi.Get<IArticle[]>("devblog", "article");

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
