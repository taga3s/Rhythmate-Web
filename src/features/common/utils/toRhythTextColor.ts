// type Color = "Blue" | "Green" | "Red" | "Purple" | "Orange" | "Yellow" | "LightBlue";

const toRhythTextColor = (color: string): string => {
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
      return "text-rhyth-gray";
  }
};

export { toRhythTextColor };
