import MarkDownRenderer from "@/app/components/MarkdownRenderer";
import dedent from "dedent";

import { IArticle } from "@/lib/interfaces/http/article.interface";
import FetchApiClient from "@/lib/axios";
import { formatStringToMarkdown } from "@/util/strings.util";
import { tranformTimezoneDateInLiteral } from "@/util/dates.util";
interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function Article({ params }: ArticlePageProps) {
  const fetchApi = new FetchApiClient();
  const article = await fetchApi.Get<IArticle>(
    "devblog",
    `article/${params.slug}`
  );

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-5xl font-bold">{article.title}</h1>
        <div className="flex gap-4 text-sm text-gray-500 border-b-1 border-foreground py-4">
          <p>⏱️ 5 min read</p>
          <p>📅 {tranformTimezoneDateInLiteral(article.createdAt)}</p>
        </div>
      </div>
      <div>
        <MarkDownRenderer
          content={dedent(formatStringToMarkdown(article.content))}
        />
      </div>
    </div>
  );
}
