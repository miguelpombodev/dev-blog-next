export const formatStringToMarkdown = (value: string): string => {
  const markdown = value.replace(/\\n/g, "\n");

  return markdown;
};
