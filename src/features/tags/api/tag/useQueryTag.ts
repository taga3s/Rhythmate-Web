import { useSuspenseQuery } from "@tanstack/react-query";
import { createFactory } from "../../../../api/tag/factory";
import type { Tag } from "../../../../api/tag/model";
import type { FetchError } from "../../../../api/util/fetchError";

export const useQueryTagList = () => {
  const tagFactory = createFactory();
  return useSuspenseQuery<Tag[], FetchError>({
    queryKey: ["tags"],
    queryFn: async () => {
      const tags = await tagFactory.listTags();
      return tags;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
};
