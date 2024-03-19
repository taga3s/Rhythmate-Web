import { FC } from "react";

type Props = {
  color: string;
  onCloseFn: () => void;
};

export const TagsColorItem: FC<Props> = ({ color, onCloseFn }) => {
  const selectColorLabel = (color: string) => {
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
    }
  };

  return (
    <li className="border-b border-rhyth-light-gray">
      <button className="w-full h-hull flex items-center px-4 py-2 rounded-t-lg" onClick={onCloseFn}>
        <span className={`flex w-3 h-3 me-3 ${selectColorLabel(color)} rounded-full`}></span>
        <p>{color}</p>
      </button>
    </li>
  );
};
