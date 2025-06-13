import { ArticleComponentProps } from "../../../lib/interfaces/components/article.interface";
import { Pen } from "lucide-react";
import ImageComponent from "../Image";
import Link from "next/link";
import { tranformTimezoneDateInLiteral } from "@/util/dates.util";
import TagComponent from "../Tags";
import { truncateWithEllipsis } from "@/util/strings.util";

export default function ArticleComponent(props: ArticleComponentProps) {
  return (
    <div className="py-6 w-full border-b-1 border-foreground">
      <Link
        href={{ pathname: `/blog/${props.article.slug}` }}
        className="flex flex-col items-start gap-5"
      >
        <div className="flex h-full w-full gap-5">
          <ImageComponent
            src={props.article.articleImageSrc}
            alt="article-image"
            title="article-image"
            className="w-18 h-18 rounded-[10] object-cover md:w-30 md:h-30"
          />
          <div>
            <h2 className="font-bold text-2xl mb-3">
              {truncateWithEllipsis(props.article.title, 45)}
            </h2>
            <div className="flex flex-1">
              <h3 className="font-extralight text-sm text-gray-700">
                {truncateWithEllipsis(props.article.briefDescription, 80)}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex pl-3 justify-between w-full">
          <span className="text-xs text-gray-700 flex gap-1 items-center">
            <Pen width={12} height={12} />
            {`Created on ${tranformTimezoneDateInLiteral(
              props.article.createdAt
            )}`}
          </span>
          <div className="flex gap-5">
            {props.article.tags.map((tag) => (
              <TagComponent key={tag.name} name={tag.name} color={tag.color} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
