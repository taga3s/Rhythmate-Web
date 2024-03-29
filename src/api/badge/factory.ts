import { Badge, toBadge } from "./model";
import { badgeRepository } from "./repository";

export const createFactory = () => {
  const repository = badgeRepository;

  return {
    listBadges: async () => {
      const response = await repository.list();
      const badges: Badge[] = response.badges.map((badge) => {
        return toBadge(badge);
      });
      return badges;
    },
    pinBadge: async (id: string) => {
      const response = await repository.pin({ id });
      return toBadge(response);
    },
    unpinBadge: async (id: string) => {
      const response = await repository.unpin({ id });
      return toBadge(response);
    },
  };
};
