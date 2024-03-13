import { Quest, toQuest } from "./model";
import { questRepository } from "./repository";
import {
  CreateQuestParams,
  DeleteQuestParams,
  FinishQuestParams,
  ForceFinishQuestParams,
  StartQuestParams,
  UpdateQuestParams,
} from "./types";

export const createFactory = () => {
  const repository = questRepository;

  return {
    listQuests: async () => {
      const response = await repository.list();
      const quests: Quest[] = response.quests.map((quest) => {
        return toQuest(quest);
      });
      return quests;
    },
    createQuest: async (createQuestParams: CreateQuestParams) => {
      const response = await repository.create(createQuestParams);
      return toQuest(response);
    },
    deleteQuest: async (deleteQuestParams: DeleteQuestParams) => {
      await repository.destroy(deleteQuestParams);
    },
    updateQuest: async (updateQuestParams: UpdateQuestParams) => {
      const response = await repository.update(updateQuestParams);
      return toQuest(response);
    },
    startQuest: async (params: StartQuestParams) => {
      const response = await repository.start(params);
      return toQuest(response);
    },
    finishQuest: async (params: FinishQuestParams) => {
      const response = await repository.finish(params);
      return toQuest(response);
    },
    forceFinishQuest: async (params: ForceFinishQuestParams) => {
      const response = await repository.forceFinish(params);
      return toQuest(response);
    },
  };
};
