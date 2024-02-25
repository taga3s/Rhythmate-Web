import { useQuery } from "@tanstack/react-query";
import { Quest } from "../model";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { questFactory } from "../factory";

export const useQueryQuestList = () => {
  return useQuery<Quest[], FetchError>({
    queryKey: ["quests"],
    queryFn: async () => {
      const quests = await questFactory().getQuestsList();
      return quests;
    },
    staleTime: Infinity,
  });
};
