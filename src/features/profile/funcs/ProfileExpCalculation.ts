import { User } from "../../../api/user/model";

export const expCalculation = (loginUser: User | undefined) => {
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
