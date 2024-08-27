import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TherapyCasesChart = () => {
  const activeTherapyCases = 45;
  const totalTherapyCases = 100;

  const data = {
    labels: ["Therapy Cases"],
    datasets: [
      {
        label: "Active Therapy Cases",
        data: [activeTherapyCases],
        backgroundColor: "#00ADB5",
        borderColor: "#00ADB5",
        borderWidth: 1,
      },
      {
        label: "Total Therapy Cases",
        data: [totalTherapyCases],
        backgroundColor: "#FF5722",
        borderColor: "#FF5722",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Therapy Cases Overview",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Cases",
        },
      },
    },
  };

  return (
    <div className="bg-[#21222D] py-10 rounded-lg mx-5 w-[70%] ">
      <div>
        <h2 className="text-3xl font-semibold ml-10 pb-5">
          Therapy Cases Dashboard
        </h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TherapyCasesChart;
