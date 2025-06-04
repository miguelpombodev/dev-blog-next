import { TagComponentProps } from "@/lib/interfaces/components/article.interface";

export default function TagComponent({ name, color }: TagComponentProps) {
  return (
    <span
      className="rounded-[10] text-xs p-[4px] mx-2 text-white font-bold 
      md:text-base"
      style={{
        backgroundColor: color,
      }}
    >
      {name}
    </span>
  );
}
