import { Quest, toQuest } from "./model";
import { questRepository } from "./repository";

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
  };
};
