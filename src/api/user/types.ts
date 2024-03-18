export type AuthParams = {
  idToken: string;
};

export type AuthRequest = {
  idToken: string;
};

export type AuthResponse = {
  status: string;
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
