import { User } from "../../../api/user/model";

export const profileExpCalculation = (loginUser: User | undefined) => {
  const currentLevel = loginUser?.level ?? 1;
  const toNextLevel = 100;
  let remainingExp = loginUser?.exp ?? 0;

  for (let i = 1; i < currentLevel; i++) {
    remainingExp -= toNextLevel * i;
  }

  const expBarProportion = (remainingExp * 100) / (toNextLevel * currentLevel);
  return { expBarProportion, remainingExp, toNextLevel, level: currentLevel };
};
