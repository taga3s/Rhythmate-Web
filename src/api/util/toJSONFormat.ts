import { snakeCase } from "lodash";

export const toJSONFormat = (obj: Record<string, any>): Record<string, any> => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const newKey = snakeCase(key);
      return [newKey, value];
    }),
  );
};
