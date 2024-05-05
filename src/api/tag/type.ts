import * as schemaHelper from "../../Rhythmate-Service/src/pkg/schemaHelper";

// type TagBaseResponse = {
//   id: string;
//   name: string;
//   color: string;
// };

// export type ListTagsResponse = {
//   status: string;
//   tags: TagBaseResponse[];
// };

// export type CreateTagParams = {
//   name: string;
//   color: string;
// };

// export type CreateRequest = {
//   name: string;
//   color: string;
// };

// export type CreateResponse = TagBaseResponse & {
//   status: string;
// };

// export type DeleteTagParams = {
//   id: string;
// };

// export type DeleteRequest = {
//   id: string;
// };

// export type DeleteResponse = {
//   status: string;
// };

// export type UpdateTagParams = {
//   id: string;
//   name: string;
//   color: string;
// };

// export type UpdateRequest = {
//   id: string;
//   name: string;
//   color: string;
// };

// export type UpdateResponse = TagBaseResponse & {
//   status: string;
// };

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
