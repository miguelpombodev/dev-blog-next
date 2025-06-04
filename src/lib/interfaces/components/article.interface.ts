import { IArticle } from "../http/article.interface";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface ArticleComponentProps {
  article: IArticle;
}

export interface TagComponentProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  name: string;
  color: string;
}
