export const getYearOfExperienceDiff = (): string => {
  const now = new Date();
  const careerStartingDate = new Date(2017, 5, 3);

  let timeSpan = now.getFullYear() - careerStartingDate.getFullYear();

  const timeHasPassed =
    now.getMonth() < careerStartingDate.getMonth() ||
    (now.getMonth() === careerStartingDate.getMonth() &&
      now.getDate() < careerStartingDate.getDate());

  if (timeHasPassed) {
    timeSpan--;
  }

  return timeSpan.toString();
};

export const tranformTimezoneDateInLiteral = (value: string): string => {
  const date = new Date(value);

  const formatter = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
  });

  return formatter.format(date);
};
