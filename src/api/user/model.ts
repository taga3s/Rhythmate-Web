export type User = {
  name: string;
  email: string;
  level: number;
  exp: number;
  imgURL: string;
};

export const toUser = (obj: {
  name: string;
  email: string;
  level: number;
  exp: number;
}): User => {
  return {
    name: obj.name,
    email: obj.email,
    level: obj.level,
    exp: obj.exp,
    imgURL: "/assets/profile/profilecat.jpg",
  };
};
