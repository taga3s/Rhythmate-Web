import { FC } from "react";

type Props = {
  className: string;
};

export const Cat: FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
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
          d="M487.318,70.379c0,0-4.138-59.206-19.264-59.206c-15.146,0-37.18,35.795-37.18,35.795h-77.112
		c0,0-22.036-35.795-37.162-35.795c-15.146,0-19.283,59.206-19.283,59.206s-38.547,38.556-19.264,90.872
		c1.404,3.847,3.052,7.395,4.83,10.756c-38.172,33.688-99.765,76.289-147.896,121.135c-32.782,30.544-46.785,73.94-45.606,113.348
		c-2.246-5.935-4.062-13.087-5.166-21.773c-0.506-4.072-0.748-8.181-0.748-12.347c0-15.286,3.332-31.311,8.686-47.673
		c7.994-24.562,20.518-49.621,31.452-73.949c5.467-12.188,10.521-24.225,14.34-36.226c3.782-12,6.385-24,6.403-36.226
		c0.056-13.61-3.576-27.744-12.337-39.82c-7.17-9.996-16.081-17.672-25.873-22.728c-9.791-5.054-20.406-7.469-30.816-7.46
		c-19.188,0.019-37.723,7.984-51.651,21.857C9.722,144,0.511,164.07,0.005,187.387c-0.224,9.258,7.096,16.952,16.363,17.177
		c9.267,0.215,16.942-7.114,17.167-16.372c0.393-15.09,5.972-26.388,13.834-34.288c7.882-7.89,18.178-12.084,27.95-12.066
		c5.317,0.01,10.503,1.189,15.427,3.735c4.924,2.546,9.679,6.468,14.004,12.477c4.249,6,5.972,12.019,6.028,20.247
		c0.056,9.717-3.033,22.222-8.424,36.376c-7.994,21.276-20.8,45.951-31.882,72.413c-11.009,26.51-20.5,55.069-20.556,85.285
		c0,5.476,0.318,10.98,1.01,16.512c1.872,15.023,5.672,27.894,11.139,38.781c8.144,16.334,20.294,27.913,33.456,34.746
		c3.314,1.731,6.683,3.182,10.053,4.38c9.96,16.886,24.225,29.327,42.197,34.036h292.35c0,0,9.585-52.719-35.14-52.719
		c0,0,16.831-174.687,37.667-232.892c25.854-6.534,51.858-21.146,63.952-53.964C525.883,108.935,487.318,70.379,487.318,70.379z"
          fill="#333333"
        ></path>
      </g>
    </svg>
  );
};