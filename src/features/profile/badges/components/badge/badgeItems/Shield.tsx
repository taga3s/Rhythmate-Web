import { FC } from "react";

type Props = {
  className: string;
};

export const Shield: FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className}
    >
      {/* <style type="text/css">
      .st0{fill:#4B4B4B;}
    </style> */}
      <g>
        <path
          className="st0"
          d="M435.209,96.685l-19.627-1.077c-53.229-2.957-99.37-23.39-126.611-56.099L255.999,0l-32.98,39.509
        c-27.24,32.709-73.391,53.142-126.611,56.099l-40.497,2.24v187.094c0,26.61,8.059,51.698,20.878,74.642
        c44.26,79.84,144.978,134.496,159.311,142.02L255.999,512l19.891-10.396c18.454-9.678,180.198-97.664,180.198-216.662V97.848
        L435.209,96.685z M98.737,261.106c0-46.326,0-122.674,0-122.674c64.333-3.579,121.509-28.578,157.263-71.5v194.174h157.247v23.836
        c0,96.501-157.247,178.668-157.247,178.668V261.106H98.737z"
          fill="#0087EE"
        ></path>
      </g>
    </svg>
  );
};
