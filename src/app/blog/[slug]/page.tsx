"use client";

import { IArticle } from "@/lib/interfaces/http/article.interface";
import { tranformTimezoneDateInLiteral } from "@/util/dates.util";
import Purify from "isomorphic-dompurify";
import ImageComponent from "@/app/components/Image";
import TagComponent from "@/app/components/Tags";
import Spinner from "@/app/components/Spinner";
import { use, useEffect, useState, useTransition } from "react";
import { getAllArticle, getArticle } from "@/app/actions/articles.actions";
import ResultModalComponent from "@/app/components/Modal/ResultModal";
import ArticleComponent from "@/app/components/Article";

export default function Article({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(paramsPromise);

  const [article, setArticle] = useState<IArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<IArticle[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const article = await getArticle(slug);
        const relatedArticlesResult = await getAllArticle(article.tags);
        setArticle(article);
        setRelatedArticles(relatedArticlesResult);
      } catch {
        setError("Erro ao carregar informações do painel.");
        setModalOpen(true);
      }
    });
  }, [slug]);

  if (isPending || !article || !relatedArticles) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col justify-start items-start max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 mb-8 w-full">
        <ImageComponent
          src={article.articleImageSrc}
          alt={article.title}
          title={article.title}
          className="w-full h-40 object-cover object-[20%_10%] rounded-[10] md:h-100"
        />
        <h1 className="text-5xl font-bold">{article.title}</h1>
        <div className="flex gap-5">
          {article.tags.map((tag) => (
            <TagComponent key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </div>
        <div className="flex gap-4 text-sm text-gray-500 border-b-1 border-foreground py-4">
          <p>
            📅 Created on {tranformTimezoneDateInLiteral(article.createdAt)}
          </p>
        </div>
      </div>
      <div
        className="prose max-w-none p-8 py-4 mb-10"
        dangerouslySetInnerHTML={{ __html: Purify.sanitize(article.content) }}
      />
      <div className="flex flex-col w-full mt-5 pt-3 border-t-1 border-gray-200 gap-10 mb-20">
        <h2 className="text-2xl font-bold md:text-4xl">
          Other Related Articles
        </h2>
        <div className="flex flex-col w-full">
          {relatedArticles.map((article) => (
            <ArticleComponent key={article._id} article={article} />
          ))}
        </div>
      </div>
      <ResultModalComponent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        isSuccess={false}
        message={error || ""}
      />
    </div>
  );
}
