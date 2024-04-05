export type Tag = {
  id: string;
  name: string;
  color: string;
};

export const toTag = (obj: {
  id: string;
  name: string;
  color: string;
}): Tag => {
  return {
    id: obj.id,
    name: obj.name,
    color: obj.color,
  };
};

