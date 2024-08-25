import type * as schemaHelper from "../../../submodules/service/src/pkg/schemaHelper";

export type CreateTagParams = schemaHelper.RequestData<"/tags", "post">;

export type CreateTagRequest = schemaHelper.RequestData<"/tags", "post">;

export type CreateTagResponse = schemaHelper.ResponseData<"/tags", "post">;

export type UpdateTagParams = schemaHelper.RequestData<"/tags/:id", "patch">;

export type UpdateTagRequest = schemaHelper.RequestData<"/tags/:id", "patch">;

export type UpdateTagResponse = schemaHelper.ResponseData<"/tags/:id", "patch">;

export type ListTagsResponse = schemaHelper.ResponseData<"/tags", "get">;

export type DeleteTagParams = schemaHelper.RequestData<"/tags/:id", "delete">;

export type DeleteTagRequest = schemaHelper.RequestData<"/tags/:id", "delete">;

export type DeleteTagResponse = schemaHelper.ResponseData<"/tags/:id", "delete">;
