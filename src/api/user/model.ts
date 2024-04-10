export type User = {
  name: string;
  email: string;
  level: number;
  exp: number;
  imageUrl: string;
};

export const toUser = (obj: {
  name: string;
  email: string;
  level: number;
  exp: number;
  imageUrl: string;
}): User => {
  return {
    name: obj.name,
    email: obj.email,
    level: obj.level,
    exp: obj.exp,
    imageUrl: obj.imageUrl ? obj.imageUrl : "/assets/profile/profilecat.jpg",
  };
};
