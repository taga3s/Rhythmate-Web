export type SignupParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type SignupRequest = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type SignupResponse = {
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
