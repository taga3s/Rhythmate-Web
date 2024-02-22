export type GetResponse = {
  name: string;
  email: string;
  level: number;
};

export type UpdateLoginUserRequest = {
  name: string;
};

export type UpdateLoginUserResponse = {
  name: string;
  email: string;
  level: number;
};

export type UpdateLoginUserParams = {
  name: string;
};
