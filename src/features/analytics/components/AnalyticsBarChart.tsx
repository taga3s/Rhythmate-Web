import { FC } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
  data: number[];
};

const labels = ["月", "火", "水", "木", "金", "土", "日"];

export const AnalyticsBarChart: FC<Props> = ({ data }) => {
  const currentData = {
    labels,
    datasets: [
      {
        label: "クエスト達成数",
        data: data,
        backgroundColor: "rgba(242, 72, 33)",
        borderRadius: 2,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="w-full mt-4">
      <Bar
        data={currentData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
