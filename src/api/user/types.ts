import type * as schemaHelper from "../../Rhythmate-Service/src/pkg/schemaHelper";

export type AuthParams = schemaHelper.RequestData<"/users/auth", "post">;

export type AuthRequest = schemaHelper.RequestData<"/users/auth", "post">;

export type AuthResponse = schemaHelper.ResponseData<"/users/auth", "post">;

export type UpdateLoginUserParams = schemaHelper.RequestData<"/users/me", "patch">;

export type UpdateLoginUserRequest = schemaHelper.RequestData<"/users/me", "patch">;

export type UpdateLoginUserResponse = schemaHelper.ResponseData<"/users/me", "patch">;

export type GetLoginUserResponse = schemaHelper.ResponseData<"/users/me", "get">;

export type IsAuthenticatedResponse = schemaHelper.ResponseData<"/users/authenticated", "get">;
