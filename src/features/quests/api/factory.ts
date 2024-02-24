import { Quest, toQuest } from "./model";
import { questRepository } from "./repository";
import { FinishParams, ForceFinishParams, StartParams } from "./types";

export const questFactory = () => {
  const repository = questRepository;

  return {
    getQuestsList: async () => {
      const response = await repository.get();
      const questList: Quest[] = [];
      response.quests.forEach((value) => {
        const quest = toQuest(value);
        questList.push(quest);
      });
      return questList;
    },
    startQuest: async (params: StartParams) => {
      const response = await repository.start(params);
      return toQuest(response);
    },
    finishQuest: async (params: FinishParams) => {
      const response = await repository.finish(params);
      return toQuest(response);
    },
    forceFinishQuest: async (params: ForceFinishParams) => {
      const response = await repository.forceFinish(params);
      return toQuest(response);
    },
  };
};
