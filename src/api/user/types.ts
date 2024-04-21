type BaseResponse = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  level: number;
  exp: number;
};

export type AuthParams = {
  idToken: string;
};

export type AuthRequest = {
  idToken: string;
};

export type AuthResponse = {
  status: string;
};

export type IsAuthenticatedResponse = {
  status: boolean;
  message: string;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  status: string;
};

export type GetResponse = BaseResponse & {
  status: string;
};

export type UpdateLoginUserRequest = {
  name: string;
};

export type UpdateLoginUserResponse = BaseResponse & {
  status: string;
};

export type UpdateLoginUserParams = {
  name: string;
};

export type DeleteLoginUserRequest = {
  id: string;
};

export type DeleteLoginUserResponse = {
  status: string;
};

export type DeleteLoginUserParams = {
  id: string;
};
