export const formatStringToMarkdown = (value: string): string => {
  const markdown = value.replace(/\\n/g, "\n");

  return markdown;
};

export const truncateWithEllipsis = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
};
