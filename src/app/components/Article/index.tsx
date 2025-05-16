import { ArticleComponentProps } from "../../../lib/interfaces/components/article.interface";
import { Pen } from "lucide-react";
import ImageComponent from "../Image";
import Link from "next/link";
import { tranformTimezoneDateInLiteral } from "@/util/dates.util";
import TagComponent from "../Tags";

export default function ArticleComponent(props: ArticleComponentProps) {
  console.log(props.article.slug);
  return (
    <div className="py-4 w-full border-b-1 border-foreground md:w-5/6">
      <Link
        href={{ pathname: `/blog/${props.article.slug}` }}
        className="flex items-start h-40 gap-5"
      >
        <ImageComponent
          src={props.article.articleImageSrc}
          alt="article-image"
          title="article-image"
          className="w-18 h-18 rounded-[10] md:w-30 md:h-30"
        />
        <div className="flex h-full w-full flex-col justify-between gap-2">
          <h2 className="font-bold text-2xl">{props.article.title}</h2>
          <div className="flex flex-1">
            <h3 className="font-extralight text-sm text-gray-700">
              {props.article.briefDescription}
            </h3>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-700 flex gap-1 items-center">
              <Pen width={12} height={12} />
              {tranformTimezoneDateInLiteral(props.article.createdAt)}
            </span>
            <div className="flex">
              {props.article.tags.map((tag) => (
                <TagComponent key={tag} name={tag} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
