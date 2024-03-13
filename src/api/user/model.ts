export type User = {
  name: string;
  email: string;
  level: number;
};

export const toUser = (obj: { name: string; email: string; level: number }): User => {
  return {
    name: obj.name,
    email: obj.email,
    level: obj.level,
  };
};
