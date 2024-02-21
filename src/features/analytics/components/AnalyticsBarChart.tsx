import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ["月", "火", "水", "木", "金", "土", "日"];
const data1 = [6, 9, 8, 5, 4, 4, 7];

const data = {
  labels,
  datasets: [
    {
      label: "クエスト達成数",
      data: data1,
      backgroundColor: "rgba(242, 72, 33)",
      borderRadius: 2,
      borderSkipped: false,
    },
  ],
};

export const AnalyticsBarChart = () => {
  return (
    <div className="w-full mt-4">
      <Bar
        data={data}
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
