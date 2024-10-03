import { useSuspenseQuery } from "@tanstack/react-query";
import { createFactory } from "../../../api/badge/factory";
import type { Badge } from "../../../api/badge/model";
import type { FetchError } from "../../../api/util/fetchError";

export const useQueryBadgeList = () => {
  const badgeFactory = createFactory();
  return useSuspenseQuery<Badge[], FetchError>({
    queryKey: ["badges"],
    queryFn: async () => {
      const badges = await badgeFactory.listBadges();
      return badges;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
};
