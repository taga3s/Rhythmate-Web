import { FC, useState } from "react";
// import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TagItem } from "../../common/components/TagItem";
import { selectTagColorText } from "../../common/funcs";
// import { TSelectTagValidationSchema } from "../common/libs/validation";

// type Props = {
//   register: UseFormRegister<TSelectTagValidationSchema>;
//   watch: UseFormWatch<TSelectTagValidationSchema>;
// }

type Item = {
  name: string;
  color: string;
};

export const NewTagDropdown = ({}) => {
  const [tagItem, setTagItem] = useState<Item>({ name: "null", color: "null" });

  const handleTagItem = (name: string, color: string) => {
    setTagItem({ name: name, color: color });
  };

  return (
    <>
      <select
        id="new-quest-tag"
        className={`bg-white border-2 text-rhyth-dark-blue text-sm font-bold rounded-lg w-1/2 p-2 mt-4 ${selectTagColorText(
          tagItem.color,
        )}`}
        value={tagItem.name}
        // {...register("tag")}
      >
        <option
          value=""
          className={`w-full bg-white text-rhyth-dark-blue border border-rhyth-light-gray font-medium rounded-lg text-sm px-5 py-2.5 inline-flex`}
        >
          色を選択
        </option>
        <TagItem name="sample" color="Blue" />
        <TagItem name="sample" color="Green" />
        <TagItem name="sample" color="Red" />
        <TagItem name="sample" color="Purple" />
        <TagItem name="sample" color="Orange" />
        <TagItem name="sample" color="Yellow" />
        <TagItem name="sample" color="LightBlue" />
      </select>
    </>
  );
};
