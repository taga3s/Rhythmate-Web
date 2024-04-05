export const selectTagColorText = (color: string) => {
  switch (color) {
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
      return "";
  }
};

export const selectTagColorBg = (color: string) => {
  switch (color) {
    case "Blue":
      return "bg-rhyth-blue";
    case "Green":
      return "bg-rhyth-green";
    case "Red":
      return "bg-rhyth-red";
    case "Purple":
      return "bg-rhyth-purple";
    case "Orange":
      return "bg-rhyth-orange";
    case "Yellow":
      return "bg-rhyth-yellow";
    case "LightBlue":
      return "bg-rhyth-light-blue";
    default:
      return "";
  }
};