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
  imgUrl: string;
}): User => {
  return {
    name: obj.name,
    email: obj.email,
    level: obj.level,
    exp: obj.exp,
    imgURL: obj.imgUrl ? obj.imgUrl : "/assets/profile/profilecat.jpg",
  };
};
