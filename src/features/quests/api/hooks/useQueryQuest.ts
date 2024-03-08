import { useQuery } from "@tanstack/react-query";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { createFactory } from "../../../../api/quest/factory";
import { Quest } from "../../../../api/quest/model";

export const useQueryQuestList = () => {
  const questFactory = createFactory();
  return useQuery<Quest[], FetchError>({
    queryKey: ["quests"],
    queryFn: async () => {
      const quests = await questFactory.listQuests();
      return quests;
    },
    staleTime: Infinity,
  });
};
