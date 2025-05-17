import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { IMarkdownRendererProps } from "@/lib/interfaces/components/markdown.interface";

export default function MarkDownRenderer({ content }: IMarkdownRendererProps) {
  return (
    <div className="prose font-sans prose-neutral max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content.trim()}
      </ReactMarkdown>
    </div>
  );
}
