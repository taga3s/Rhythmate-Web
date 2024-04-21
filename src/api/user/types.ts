type BaseResponse = {
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

export type UpdateLoginUserParams = {
  name: string;
  image_binary: string;
};

export type UpdateLoginUserRequest = {
  name: string;
  image_binary: string;
};

export type UpdateLoginUserResponse = BaseResponse & {
  status: string;
};
