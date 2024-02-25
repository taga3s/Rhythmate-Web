import { toQuest } from "./model";
import { questRepository } from "./repository";
import { CreateQuestParams, DeleteQuestParams, UpdateQuestParams } from "./types";

export const createFactory = () => {
  const repository = questRepository;

  return {
    createQuest: async (createQuestParams: CreateQuestParams) => {
      const response = await repository.create(createQuestParams);
      return toQuest(response);
    },
    updateQuest: async (updateQuestParams: UpdateQuestParams) => {
      const response = await repository.update(updateQuestParams);
      return toQuest(response);
    },
    deleteQuest: async (deleteQuestParams: DeleteQuestParams) => {
      await repository.destroy(deleteQuestParams);
    },
  };
};
