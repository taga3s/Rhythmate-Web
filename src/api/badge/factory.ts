import { type Badge, toBadge } from "./model";
import { BadgeRepository, badgeRepository } from "./repository";
import type { AchieveBadgeParams, PinBadgeParams, UnpinBadgeParams } from "./types";

export const createFactory = () => {
  const repository: BadgeRepository = badgeRepository;

  return {
    listBadges: async () => {
      const response = await repository.list();
      const badges: Badge[] = response.badgesWithDetail.map((badge) => {
        return toBadge(badge);
      });
      return badges;
    },
    achieveBadge: async (params: AchieveBadgeParams) => {
      const response = await repository.achieve(params);
      return toBadge(response);
    },
    pinBadge: async (params: PinBadgeParams) => {
      const response = await repository.pin(params);
      return toBadge(response);
    },
    unpinBadge: async (params: UnpinBadgeParams) => {
      const response = await repository.unpin(params);
      return toBadge(response);
    },
  };
};
