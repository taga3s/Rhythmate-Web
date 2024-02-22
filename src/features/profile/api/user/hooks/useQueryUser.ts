import { useQuery } from "@tanstack/react-query";
import { User } from "../model";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { userFactory } from "../factory";

export const useQueryLoginUser = () => {
  return useQuery<User, FetchError>({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await userFactory().getLoginUser();
      return user;
    },
    staleTime: Infinity,
  });
};
