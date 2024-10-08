// type Color = "Blue" | "Green" | "Red" | "Purple" | "Orange" | "Yellow" | "LightBlue";

const toRhythBgColor = (color: string): string => {
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
      return "bg-rhyth-gray";
  }
};

export { toRhythBgColor };
