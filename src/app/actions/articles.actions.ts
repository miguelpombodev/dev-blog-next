"use server";

import FetchApiClient from "@/lib/axios";
import { IArticle, ITag } from "@/lib/interfaces/http/article.interface";

export async function getArticle(slug: string): Promise<IArticle> {
  const fetchApi = new FetchApiClient();
  const article = await fetchApi.Get<IArticle>("devblog", `article/${slug}`);

  return article;
}

export async function getAllArticle(
  tags?: ITag[],
  sort = "asc"
): Promise<IArticle[]> {
  const fetchApi = new FetchApiClient();
  let queryTags: string = "";

  if (tags) {
    tags.map((tag) => {
      queryTags = queryTags.concat(`,${tag.id}`);
      return;
    });
  }

  const checkTagsAmount = queryTags.length > 0;

  const article = await fetchApi.Get<IArticle[]>(
    "devblog",
    `article?${checkTagsAmount ?? queryTags}&${sort}`
  );

  return article;
}
