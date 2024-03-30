import { useQueryLoginUser } from "../api/user/hooks/useQueryUser";

export const expCalculation = () => {
  const { data: loginUser } = useQueryLoginUser();
  let level: number;

  if (loginUser?.level === undefined) {
    level = 1;
  } else {
    level = loginUser.level;
  }

  const toNextLevel = 100;

  let remainingExp: number;

  if (loginUser?.exp === undefined) {
    remainingExp = 0;
  } else {
    remainingExp = loginUser.exp;
  }

  while (remainingExp >= toNextLevel * (level - 1)) {
    remainingExp -= toNextLevel * (level - 1);
  }

  let expBarProportion = remainingExp / level;
  return { expBarProportion, remainingExp, toNextLevel, level };
};
