import { toTag } from "./model";
import { TagRepository, tagRepository } from "./repository";
import type { CreateTagParams, DeleteTagParams, UpdateTagParams } from "./type";

export const createFactory = () => {
  const repository: TagRepository = tagRepository;

  return {
    listTags: async () => {
      const response = await repository.list();
      return response.tags.map((tag) => toTag(tag));
    },
    createTag: async (CreateTagParams: CreateTagParams) => {
      const response = await repository.create(CreateTagParams);
      return toTag(response);
    },
    deleteTag: async (DeleteTagParams: DeleteTagParams) => {
      await repository.destroy(DeleteTagParams);
    },
    updateTag: async (UpdateTagParams: UpdateTagParams) => {
      const response = await repository.update(UpdateTagParams);
      return toTag(response);
    },
  };
};
