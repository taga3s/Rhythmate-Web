export const calcExp = (diff: string, continuationLevel: number) => {
  if (diff === "EASY") {
    const result = 1 * 10 * continuationLevel;
    return result;
  }
  if (diff === "NORMAL") {
    const result = 2 * 10 * continuationLevel;
    return result;
  }
  if (diff === "HARD") {
    const result = 3 * 10 * continuationLevel;
    return result;
  }
  return 0;
};
