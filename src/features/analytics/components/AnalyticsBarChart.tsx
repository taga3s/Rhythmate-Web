import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import type { FC } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
  completedQuestsData: number[];
  failedQuestsData: number[];
};

const labels = ["月", "火", "水", "木", "金", "土", "日"];

export const AnalyticsBarChart: FC<Props> = ({ completedQuestsData, failedQuestsData }) => {
  const currentData = {
    labels: labels,
    datasets: [
      {
        label: "クエスト達成数",
        data: completedQuestsData,
        backgroundColor: ["rgba(0, 181, 238, 1)"],
        borderRadius: 2,
        borderSkipped: false,
      },
      {
        label: "クエスト失敗数",
        data: failedQuestsData,
        backgroundColor: ["rgba(230, 115, 144, 1)"],
        borderRadius: 2,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="mt-2 text-sm border-2 w-full p-3 bg-white rounded-lg shadow">
      <div className="w-full min-h-48 md:min-h-52">
        <Bar
          data={currentData}
          options={{
            scales: {
              x: {
                ticks: {
                  color: "rgba(0, 68, 121, 1)",
                },
              },
              y: {
                ticks: {
                  color: "rgba(0, 68, 121, 1)",
                  stepSize: 1,
                },
                min: 0,
                max: 10,
              },
            },
            backgroundColor: "rgba(250, 250, 250, 1)",
            maintainAspectRatio: false,
            responsive: true,
            datasets: {},
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  font: {
                    size: 12,
                  },
                  boxHeight: 10,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
