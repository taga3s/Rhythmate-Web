export type SignupRequest = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type SignupResponse = {
  status: string;
};

export type SignupParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
