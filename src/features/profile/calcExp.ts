export const calcExp = (level: number, exp: number) => {
  const currentLevel = level;
  const toNextLevel = 100;
  let remainingExp = exp;

  for (let i = 1; i < currentLevel; i++) {
    remainingExp -= toNextLevel * i;
  }

  const expBarProportion = (remainingExp * 100) / (toNextLevel * currentLevel);
  return { expBarProportion, remainingExp, toNextLevel, level: currentLevel };
};
