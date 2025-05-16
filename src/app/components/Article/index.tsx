import { ArticleComponentProps } from "../../../lib/interfaces/components/article.interface";
import { Pen } from "lucide-react";
import ImageComponent from "../Image";
import Link from "next/link";

export default function ArticleComponent(props: ArticleComponentProps) {
  console.log(props.article.slug);
  return (
    <div className="py-4 w-5/6 border-b-1 border-foreground">
      <Link
        href={`/blog/${props.article.slug}`}
        className="flex items-start h-30 gap-5 "
      >
        <ImageComponent
          src={props.article.articleImageSrc}
          alt="article-image"
          title="article-image"
          className="w-30 h-30 rounded-[10]"
        />
        <div className="flex h-full flex-col justify-around">
          <h2 className="font-bold text-2xl">{props.article.title}</h2>
          <h3 className="font-extralight text-base text-gray-700">
            {props.article.description}
          </h3>
          <div className="flex">
            <span className="text-xs text-gray-700 flex gap-1 items-center">
              <Pen width={12} height={12} />
              {props.article.createdAt}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
