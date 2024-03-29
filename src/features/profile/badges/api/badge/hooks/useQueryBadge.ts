import { useQuery } from "@tanstack/react-query";
import { createFactory } from "../../../../../../api/badge/factory";
import { Badge } from "../../../../../../api/badge/model";
import { FetchError } from "../../../../../../pkg/api/util/fetchError";

export const useQueryBadgeList = () => {
  const badgeFactory = createFactory();
  return useQuery<Badge[], FetchError>({
    queryKey: ["badges"],
    queryFn: async () => {
      const badges = await badgeFactory.listBadges();
      return badges;
    },
    staleTime: Infinity,
  });
};
