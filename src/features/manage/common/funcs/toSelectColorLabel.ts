import { Tag } from "../../../../api/tag/model";

export const toSelectColorLabel = (tagItems: Tag[], tagId: string | undefined) => {
  const selectTagItem = tagItems?.find((tagItem) => tagItem.id === tagId);
  switch (selectTagItem?.color) {
    case "Blue":
      return "text-rhyth-blue";
    case "Green":
      return "text-rhyth-green";
    case "Red":
      return "text-rhyth-red";
    case "Purple":
      return "text-rhyth-purple";
    case "Orange":
      return "text-rhyth-orange";
    case "Yellow":
      return "text-rhyth-yellow";
    case "LightBlue":
      return "text-rhyth-light-blue";
    default:
      return "text-rhyth-dark-blue";
  }
};
