import type { FC } from "react";

type Props = {
  level: number;
};

export const ManageProgressBar: FC<Props> = (props) => {
  const { level } = props;
  const max = 7;
  return (
    <div className="max-w-full flex items-center gap-x-1.5 my-2">
      {[...Array(max)]
        .map((_, i) => i)
        .map((v) => {
          if (v + 1 <= level) {
            return (
              <div
                key={v}
                className="w-full h-3 flex flex-col justify-center overflow-hidden bg-rhyth-green  whitespace-nowrap transition duration-500"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            );
          }
          return (
            <div
              key={v}
              className="w-full h-3 flex flex-col justify-center overflow-hidden bg-rhyth-light-gray text-xs  whitespace-nowrap transition duration-500"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          );
        })}
    </div>
  );
};
