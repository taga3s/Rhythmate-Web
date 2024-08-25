import { useSuspenseQuery } from "@tanstack/react-query";
import { createFactory } from "../../../../../api/user/factory";
import type { User } from "../../../../../api/user/model";
import type { FetchError } from "../../../../../api/util/fetchError";

export const useQueryLoginUser = () => {
  const userFactory = createFactory();
  return useSuspenseQuery<User, FetchError>({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await userFactory.getLoginUser();
      return user;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
};
