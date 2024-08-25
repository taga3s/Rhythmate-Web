import { useSuspenseQuery } from "@tanstack/react-query";
import { createFactory } from "../../../../api/quest/factory";
import type { Quest } from "../../../../api/quest/model";
import type { FetchError } from "../../../../api/util/fetchError";

export const useQueryQuestList = () => {
  const questFactory = createFactory();
  return useSuspenseQuery<Quest[], FetchError>({
    queryKey: ["quests"],
    queryFn: async () => {
      const quests = await questFactory.listQuests();
      return quests;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
};
