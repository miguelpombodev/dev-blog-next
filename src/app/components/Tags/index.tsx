import { TagComponentProps } from "@/lib/interfaces/components/article.interface";

type TagName = "backend" | "frontend" | "database" | "architecture";

export default function TagComponent({ name }: TagComponentProps) {
  const tagColorsMapping: Record<TagName, string> = {
    backend: "bg-backend-tag",
    frontend: "bg-frontend-tag",
    database: "bg-database-tag",
    architecture: "bg-architecture-tag",
  };

  return (
    <span
      className={`rounded-[10] text-xs p-[4px] mx-2 text-white font-bold ${
        tagColorsMapping[name as TagName]
      }
      md:text-base
      `}
    >
      {name}
    </span>
  );
}
