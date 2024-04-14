import { useSuspenseQuery } from "@tanstack/react-query";
import { createFactory } from "../../../api/user/factory";

export const useAuthenticate = () => {
  const userFactory = createFactory();
  return useSuspenseQuery({
    queryKey: ["isAuthenticated"],
    queryFn: async () => {
      const isAuthenticated = await userFactory.isAuthenticated();
      return isAuthenticated;
    },
    staleTime: 0,
  });
};

export type AuthContext = ReturnType<typeof useAuthenticate>;
