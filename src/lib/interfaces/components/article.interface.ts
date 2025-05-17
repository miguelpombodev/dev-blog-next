import { IArticle } from "../http/article.interface";

export interface ArticleComponentProps {
  article: IArticle;
}

export interface TagComponentProps {
  name: string;
}
