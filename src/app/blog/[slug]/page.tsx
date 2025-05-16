interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function Article({ params }: ArticlePageProps) {
  return <h1>{params.slug}</h1>;
}
