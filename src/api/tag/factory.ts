import { tagRepository } from "./repository";
import type { CreateTagParams, DeleteTagParams, UpdateTagParams } from "./type";

export const createFactory = () => {
  const repository = tagRepository;

  return {
    listTags: async () => {
      const response = await repository.list();
      return response.tags;
    },
    createTag: async (CreateTagParams: CreateTagParams) => {
      const response = await repository.create(CreateTagParams);
      return response;
    },
    deleteTag: async (DeleteTagParams: DeleteTagParams) => {
      await repository.destroy(DeleteTagParams);
    },
    updateTag: async (UpdateTagParams: UpdateTagParams) => {
      const response = await repository.update(UpdateTagParams);
      return response;
    },
  };
};
