import { FC } from "react";

type Props = {
  className: string;
};

export const Gem: FC<Props> = ({ className }) => {
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
          d="M400.406,53.719H258.094h-6.609H111.594L0,207.172l256.016,251.109l10.547-10.344L512,207.172L400.406,53.719z
        M375.656,83.875l-20.594,91.563l-72.938-91.563H375.656z M254.969,92.594l79.344,99.578H177.328L254.969,92.594z M227.938,83.875
        l-71.094,91.188l0,0l-20.5-91.188H227.938z M113.219,102.734v-0.016l20.125,89.453H48.188L113.219,102.734z M141.438,218.859
        l70.422,153.875L54.953,218.859H141.438z M256.016,405.094l-85.219-186.234h170.406L256.016,405.094z M300.141,372.734
        l70.422-153.875h86.453L300.141,372.734z M378.672,192.172l20.109-89.453v0.016l65.031,89.438H378.672z"
          fill="#DA06AC"
        ></path>
      </g>
    </svg>
  );
};
