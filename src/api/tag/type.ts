type TagBaseResponse = {
  id: string;
  name: string;
  color: string;
};

export type ListTagsResponse = {
  status: string;
  tags: TagBaseResponse[];
};

export type CreateTagParams = {
  name: string;
  color: string;
};

export type CreateRequest = {
  name: string;
  color: string;
};

export type CreateResponse = TagBaseResponse & {
  status: string;
};

export type DeleteTagParams = {
  id: string;
};

export type DeleteRequest = {
  id: string;
};

export type DeleteResponse = {
  status: string;
};

export type UpdateTagParams = {
  id: string;
  name: string;
  color: string;
};

export type UpdateRequest = {
  id: string;
  name: string;
  color: string;
};

export type UpdateResponse = TagBaseResponse & {
  status: string;
};


