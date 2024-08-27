import React from 'react'
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

const SupervisorApprovalChart = () => {
  const activeTherapyCases = 78;
  const totalTherapyCases = 100;

  const data = {
    labels: ["Therapy Cases Approval"],
    datasets: [
      {
        label: "Pending Approval",
        data: [activeTherapyCases],
        backgroundColor: "#00ADB5",
        borderColor: "#00ADB5",
        borderWidth: 1,
      },
      {
        label: "Total Therapy Cases Approved",
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
        text: "Therapy Cases Approval",
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



export default SupervisorApprovalChart


