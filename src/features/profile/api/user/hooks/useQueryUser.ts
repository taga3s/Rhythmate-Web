import { useQuery } from "@tanstack/react-query";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { User } from "../../../../../api/user/model";
import { createFactory } from "../../../../../api/user/factory";

export const useQueryLoginUser = () => {
  const userFactory = createFactory();
  return useQuery<User, FetchError>({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await userFactory.getLoginUser();
      return user;
    },
    staleTime: Infinity,
  });
};
